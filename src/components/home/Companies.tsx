import { Flex, Text, RevealFx } from "@once-ui-system/core";
import Image from "next/image";

type Company = {
  name: string;
  logo?: string;
};

const companies: Company[] = [
  { name: "8Flamez", logo: "/images/companies/8Flamez-Text-Logo.webp" },
  { name: "Code Cooperation", logo: "/images/companies/codecooperation.svg" },
  { name: "Favicon V2", logo: "/images/companies/faviconV2.png" },
  { name: "Logo 2", logo: "/images/companies/logo-2.png" },
  {
    name: "Masterclass Samy",
    logo: "/images/companies/logo-masterclass-samy-white.webp",
  },
  { name: "Samy", logo: "/images/companies/Samy-Logo.svg" },
];

export function Companies() {
  const scrollingCompanies = [...companies, ...companies];

  return (
    <Flex fillWidth horizontal="center">
      <RevealFx translateY="4" delay={0.5}>
        <Flex
          direction="column"
          gap="20"
          horizontal="center"
          fillWidth
          style={{ paddingBottom: 0 }}
        >
          <div className="companies-marquee">
            <div className="companies-track">
              {scrollingCompanies.map((company, index) => (
                <div
                  key={`${company.name}-${index}`}
                  className="brand-card"
                  aria-hidden={index >= companies.length}
                >
                  <div className="brand-logo-slot">
                    {company.logo ? (
                      <Image
                        src={company.logo}
                        alt={`${company.name} logo`}
                        fill
                        sizes="220px"
                        style={{ objectFit: "contain" }}
                      />
                    ) : (
                      <Text
                        variant="heading-strong-m"
                        onBackground="neutral-medium"
                        align="center"
                        style={{
                          fontWeight: 700,
                          opacity: 0.7,
                          letterSpacing: "-0.03em",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {company.name}
                      </Text>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Flex>

        <style jsx global>{`
          .companies-marquee {
            width: min(100vw, 980px);
            overflow: hidden;
            position: relative;
            padding: 0 1.5rem;
          }

          .companies-track {
            display: flex;
            width: max-content;
            align-items: center;
            gap: 4rem;
            animation: companies-scroll 22s linear infinite;
          }

          .brand-card {
            width: 180px;
            min-width: 180px;
            height: 72px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .brand-logo-slot {
            width: 100%;
            height: 56px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            filter: grayscale(1);
            opacity: 0.72;
            transition: opacity 0.3s ease, filter 0.3s ease,
              transform 0.3s ease;
          }

          .brand-card:hover .brand-logo-slot {
            opacity: 1;
            filter: grayscale(0);
            transform: translateY(-1px);
          }

          @keyframes companies-scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(calc(-50% - 0.5rem));
            }
          }

          @media (max-width: 768px) {
            .companies-marquee {
              width: min(100vw, 100%);
              padding: 0 0.5rem;
            }

            .companies-track {
              gap: 2.5rem;
              animation-duration: 18s;
            }

            .brand-card {
              width: 140px;
              min-width: 140px;
              height: 64px;
            }
          }
        `}</style>
      </RevealFx>
    </Flex>
  );
}
