import React from 'react';
import { CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero / intro – match branches hero style */}
      <section className="relative h-[45vh] md:h-[55vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/about_us.jpg')",
          }}
        />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4 drop-shadow-[0_6px_20px_rgba(0,0,0,0.7)]">
            <p className="text-xs md:text-sm font-semibold tracking-[0.35em] uppercase text-ezzu-blue mb-3">
              About us
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 text-white">
              Ezzu Autotech Trading PLC
            </h1>
          </div>
        </div>
      </section>

      {/* Three step story */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 grid gap-10 lg:gap-16 lg:grid-cols-[1.3fr,1.2fr]">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-ezzu-navy mb-4">
              Our services are built for uptime, safety, and long‑term partnerships.
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              Whether you manage a single workshop or a nationwide fleet, we design our process to be
              predictable, transparent, and technically sound. That means clear recommendations, verified
              sourcing, and documentation you can trust.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Below is how a typical engagement with Ezzu Autotech looks from first contact to ongoing
              support.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Understand your operation',
                desc: 'We map your vehicles, machinery, workload, and local conditions, then clarify what matters most: uptime, efficiency, safety, or all three.',
              },
              {
                step: '02',
                title: 'Specify and source the right parts',
                desc: 'Our team shortlists OEM or equivalent components, tools, and diagnostic gear from trusted manufacturers, balancing performance and budget.',
              },
              {
                step: '03',
                title: 'Support installation and beyond',
                desc: 'We coordinate delivery, provide technical guidance, and stay available for re‑orders, upgrades, and new project consultations.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative flex gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_10px_35px_rgba(15,23,42,0.07)]"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-ezzu-light text-ezzu-navy font-bold text-xs">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-ezzu-navy mb-1">{item.title}</h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA block */}
      <section className="py-16 md:py-20 bg-ezzu-light">
        <div className="container mx-auto px-4 grid gap-10 md:grid-cols-[1.6fr,1fr] md:items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-ezzu-navy mb-4">
              Choose the right configuration for your workshop or project.
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 max-w-2xl">
              Tell us about your current setup, the brands you trust, and the challenges you are facing.
              We will recommend a parts and equipment strategy that fits your budget, lead times, and
              technical requirements.
            </p>
            <ul className="space-y-3 text-sm md:text-base text-gray-700">
              {[
                'Automotive diagnostics and service tools',
                'Heavy‑duty and industrial machinery',
                'Genuine and high‑quality replacement parts',
                'Technical training and after‑sales support',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-[3px] h-4 w-4 text-ezzu-blue" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-[0_18px_55px_rgba(15,23,42,0.12)] border border-gray-100 p-6 md:p-7">
            <p className="text-xs font-semibold tracking-[0.26em] uppercase text-ezzu-blue mb-3">
              Contact with us
            </p>
            <p className="text-sm text-gray-700 mb-6">
              Share a brief description of your needs and we&apos;ll connect you with a technical specialist
              from the nearest Ezzu branch.
            </p>
            <div className="space-y-4 text-sm text-gray-800">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-ezzu-blue" />
                <span>+251 (0) 11 000 0000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-ezzu-blue" />
                <span>sales@ezzu-autotech.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-ezzu-blue mt-1" />
                <span>
                  Headquarters, Addis Ababa
                  <br />
                  Ethiopia
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


