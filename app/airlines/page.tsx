import Link from "next/link";

const airlinesData = {
  "british-airways": {
    name: "British Airways",
    code: "BA",
  },
  "lufthansa": {
    name: "Lufthansa",
    code: "LH",
  },
  "air-france": {
    name: "Air France",
    code: "AF",
  },
  "klm-royal-dutch-airlines": {
    name: "KLM Royal Dutch Airlines",
    code: "KL",
  },
  "turkish-airlines": {
    name: "Turkish Airlines",
    code: "TK",
  },
  "swiss-international-airlines": {
    name: "SWISS International Airlines",
    code: "LX",
  },
  "virgin-atlantic": {
    name: "Virgin Atlantic",
    code: "VS",
  },
};

export default function AirlinesPage() {
  return (
    <div className="min-h-screen bg-[#F5F9FF] pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-[#0A1628] font-heading mb-2">
            Top Airlines
          </h1>
          <p className="text-[#0A1628]/60 mb-8">
            Book flights with the world's leading airlines
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(airlinesData).map(([slug, airline]) => (
              <Link
                key={slug}
                href={`/airlines/${slug}`}
                className="bg-white rounded-2xl shadow-lg p-6 border border-[#E2E8F0] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#4A8BCF]/30 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#1A3A6B] to-[#4A8BCF] flex items-center justify-center text-white text-xl font-bold shadow-lg">
                    {airline.code}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A1628] group-hover:text-[#1A3A6B] transition-colors">
                      {airline.name}
                    </h3>
                    <p className="text-xs text-[#0A1628]/40">Click to book</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}