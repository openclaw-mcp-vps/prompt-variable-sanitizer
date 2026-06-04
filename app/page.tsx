export default function Home() {
  const faqs = [
    {
      q: 'What kinds of injection attacks does this prevent?',
      a: 'It detects and strips prompt override attempts, role-switching instructions, delimiter escapes, and malicious payloads hidden in user-supplied variables before they reach your LLM.'
    },
    {
      q: 'How do I integrate it into my app?',
      a: 'Send a POST request with your variables to our REST API using your API key. Receive sanitized values back in milliseconds — drop-in compatible with any language or framework.'
    },
    {
      q: 'What happens if a variable is flagged?',
      a: 'You choose: block the request, strip the offending content, or receive a risk score and decide yourself. Configure your policy from the dashboard.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          AI Security
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Prompt Injection<br />Before It Starts
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Validate and sanitize every variable before it enters your AI prompt.
          One API call protects your LLM from malicious user input.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Get Started — $29/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required for free trial. Cancel anytime.</p>

        {/* Code preview */}
        <div className="mt-12 text-left bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-sm font-mono overflow-x-auto">
          <p className="text-[#8b949e] mb-2">// Before sending to your LLM</p>
          <p><span className="text-[#ff7b72]">const</span> <span className="text-[#79c0ff]">safe</span> = <span className="text-[#d2a8ff]">await</span> sanitize({'{'}</p>
          <p className="pl-4">apiKey: <span className="text-[#a5d6ff]">"sk-..."</span>,</p>
          <p className="pl-4">variables: {'{'} userInput, userName {'}'}</p>
          <p>{'}'})</p>
          <p className="mt-2"><span className="text-[#8b949e]">// safe.variables are injection-free ✓</span></p>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$29</p>
          <p className="text-[#8b949e] mb-6">/month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              '100,000 validations/mo',
              'REST API + SDK',
              'Custom sanitization rules',
              'Risk scoring & audit logs',
              'Dashboard & usage analytics',
              'Email support'
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border-b border-[#21262d] pb-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pb-8">
        &copy; {new Date().getFullYear()} Prompt Variable Sanitizer. All rights reserved.
      </footer>
    </main>
  )
}
