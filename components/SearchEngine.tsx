"use client";

import { useState, useRef, useEffect } from "react";
import {
  Search,
  Calendar,
  Users,
  PlaneTakeoff,
  PlaneLanding,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Minus,
  Plus,
  Loader2,
} from "lucide-react";

// Sample location data with airport codes
const locations = [
  { name: "New York", code: "JFK", country: "USA" },
  { name: "Los Angeles", code: "LAX", country: "USA" },
  { name: "Chicago", code: "ORD", country: "USA" },
  { name: "Miami", code: "MIA", country: "USA" },
  { name: "Paris", code: "CDG", country: "France" },
  { name: "London", code: "LHR", country: "UK" },
  { name: "Dubai", code: "DXB", country: "UAE" },
  { name: "Tokyo", code: "HND", country: "Japan" },
  { name: "Bali", code: "DPS", country: "Indonesia" },
  { name: "Singapore", code: "SIN", country: "Singapore" },
  { name: "Bangkok", code: "BKK", country: "Thailand" },
  { name: "Sydney", code: "SYD", country: "Australia" },
  { name: "Rome", code: "FCO", country: "Italy" },
  { name: "Barcelona", code: "BCN", country: "Spain" },
  { name: "Istanbul", code: "IST", country: "Turkey" },
  { name: "Kuala Lumpur", code: "KUL", country: "Malaysia" },
  { name: "Mumbai", code: "BOM", country: "India" },
  { name: "Cape Town", code: "CPT", country: "South Africa" },
];

export default function SearchEngine() {
  const [tripType, setTripType] = useState("roundtrip");
  const [leavingFrom, setLeavingFrom] = useState("");
  const [departingTo, setDepartingTo] = useState("");
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengerCount, setPassengerCount] = useState(2);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassengerDropdown, setShowPassengerDropdown] = useState(false);
  const [showLeavingHints, setShowLeavingHints] = useState(false);
  const [showDepartingHints, setShowDepartingHints] = useState(false);
  const [showDepartCalendar, setShowDepartCalendar] = useState(false);
  const [showReturnCalendar, setShowReturnCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDepartDate, setSelectedDepartDate] = useState<Date | null>(null);
  const [selectedReturnDate, setSelectedReturnDate] = useState<Date | null>(null);

  const leavingRef = useRef<HTMLDivElement>(null);
  const departingRef = useRef<HTMLDivElement>(null);
  const departCalendarRef = useRef<HTMLDivElement>(null);
  const returnCalendarRef = useRef<HTMLDivElement>(null);
  const passengerRef = useRef<HTMLDivElement>(null);

  const filteredLeaving = locations.filter(loc =>
    loc.name.toLowerCase().includes(leavingFrom.toLowerCase()) ||
    loc.code.toLowerCase().includes(leavingFrom.toLowerCase())
  );
  const filteredDeparting = locations.filter(loc =>
    loc.name.toLowerCase().includes(departingTo.toLowerCase()) ||
    loc.code.toLowerCase().includes(departingTo.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (leavingRef.current && !leavingRef.current.contains(event.target as Node)) {
        setShowLeavingHints(false);
      }
      if (departingRef.current && !departingRef.current.contains(event.target as Node)) {
        setShowDepartingHints(false);
      }
      if (departCalendarRef.current && !departCalendarRef.current.contains(event.target as Node)) {
        setShowDepartCalendar(false);
      }
      if (returnCalendarRef.current && !returnCalendarRef.current.contains(event.target as Node)) {
        setShowReturnCalendar(false);
      }
      if (passengerRef.current && !passengerRef.current.contains(event.target as Node)) {
        setShowPassengerDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log({
      tripType,
      leavingFrom,
      departingTo,
      departDate,
      returnDate,
      passengers: passengerCount,
    });
    setIsLoading(false);
  };

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const handleDateSelect = (day: number, isDepart: boolean) => {
    const date = new Date(currentYear, currentMonth, day);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const dayStr = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    const formattedDate = `${month}-${dayStr}-${year}`;
    
    if (isDepart) {
      setSelectedDepartDate(date);
      setDepartDate(formattedDate);
      setShowDepartCalendar(false);
    } else {
      setSelectedReturnDate(date);
      setReturnDate(formattedDate);
      setShowReturnCalendar(false);
    }
  };

  const formatDisplayDate = (dateStr: string) => {
    if (!dateStr) return '';
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      return `${parts[0]}-${parts[1]}-${parts[2]}`;
    }
    return dateStr;
  };

  const renderCalendar = (isDepart: boolean) => {
    const days = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const today = new Date();
    const selected = isDepart ? selectedDepartDate : selectedReturnDate;

    return (
      <div className="bg-white shadow-2xl p-4 w-80 z-[9999] relative border border-[#E2E8F0] ">
        <div className="text-center mb-3">
          <span className="text-xs font-semibold text-black tracking-wider uppercase">
            {isDepart ? 'Choose the Departure' : 'Choose the Return'}
          </span>
        </div>
        
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={() => {
              if (currentMonth === 0) {
                setCurrentMonth(11);
                setCurrentYear(currentYear - 1);
              } else {
                setCurrentMonth(currentMonth - 1);
              }
            }}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ChevronLeft size={18} className="text-black" />
          </button>
          <span className="font-semibold text-black">
            {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long', year: 'numeric' })}
          </span>
          <button
            onClick={() => {
              if (currentMonth === 11) {
                setCurrentMonth(0);
                setCurrentYear(currentYear + 1);
              } else {
                setCurrentMonth(currentMonth + 1);
              }
            }}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ChevronRight size={18} className="text-black" />
          </button>
        </div>
        
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'].map((day) => (
            <div key={day} className="text-center text-xs font-bold text-black py-1">
              {day}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: firstDay }, (_, i) => (
            <div key={`empty-${i}`} className="h-8" />
          ))}
          {Array.from({ length: days }, (_, i) => {
            const day = i + 1;
            const date = new Date(currentYear, currentMonth, day);
            const isToday = date.toDateString() === today.toDateString();
            const isSelected = selected?.toDateString() === date.toDateString();
            const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));

            return (
              <button
                key={day}
                onClick={() => !isPast && handleDateSelect(day, isDepart)}
                disabled={isPast}
                className={`
                  h-8 w-full rounded-full text-sm font-medium transition-all duration-200
                  ${isPast 
                    ? 'text-gray-300 cursor-not-allowed line-through' 
                    : isSelected 
                      ? 'bg-black text-white hover:bg-black/90' 
                      : 'text-black hover:bg-gray-100'
                  }
                  ${isToday && !isSelected ? 'border-2 border-black font-bold' : ''}
                `}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white shadow-2xl max-w-6xl mx-auto p-4 relative z-[100] border border-[#E2E8F0]">
      {/* Trip Type Toggle */}
      <div className="flex items-center gap-1 mb-4">
        <button
          onClick={() => setTripType("roundtrip")}
          className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
            tripType === "roundtrip"
              ? "bg-black text-white shadow-lg shadow-black/30"
              : "text-black/60 hover:text-black hover:bg-gray-100"
          }`}
        >
          Round Trip
        </button>
        <button
          onClick={() => setTripType("oneway")}
          className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
            tripType === "oneway"
              ? "bg-black text-white shadow-lg shadow-black/30"
              : "text-black/60 hover:text-black hover:bg-gray-100"
          }`}
        >
          One Way
        </button>
        <button
          onClick={() => setTripType("multicity")}
          className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
            tripType === "multicity"
              ? "bg-black text-white shadow-lg shadow-black/30"
              : "text-black/60 hover:text-black hover:bg-gray-100"
          }`}
        >
          Multi-City
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        {/* Leaving From */}
        <div className="relative lg:col-span-1" ref={leavingRef}>
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-black z-10">
            <PlaneTakeoff size={16} className="block" />
          </div>
          <input
            type="text"
            placeholder="Leaving from"
            value={leavingFrom}
            onChange={(e) => {
              setLeavingFrom(e.target.value);
              setShowLeavingHints(true);
            }}
            onFocus={() => setShowLeavingHints(true)}
            className="w-full bg-gray-50 border border-[#E2E8F0] pl-10 pr-8 py-3 text-black placeholder-[#94A3B8] focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20 transition-all duration-300 text-sm h-[52px]"
          />
          {leavingFrom && (
            <button
              onClick={() => {
                setLeavingFrom("");
                setShowLeavingHints(false);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 z-10"
            >
              <X size={14} />
            </button>
          )}
          {showLeavingHints && filteredLeaving.length > 0 && (
            <div className="absolute bottom-full left-0 w-[280px] mb-1 bg-white shadow-lg border border-[#E2E8F0] max-h-52 overflow-y-auto z-[9999] custom-scrollbar">
              {filteredLeaving.map((loc) => (
                <button
                  key={loc.code}
                  onClick={() => {
                    setLeavingFrom(`${loc.name} (${loc.code})`);
                    setShowLeavingHints(false);
                  }}
                  className="w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors flex items-center justify-between border-b border-[#E2E8F0] last:border-0"
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <MapPin size={14} className="text-black flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-medium text-black">
                        {loc.name}
                      </span>
                      <span className="text-xs text-black/50 ml-2">
                        {loc.country}
                      </span>
                    </div>
                  </div>
                  <div className="text-xs font-semibold text-black bg-gray-100 px-3 py-1 rounded-full flex-shrink-0 ml-2">
                    {loc.code}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Departing To */}
        <div className="relative lg:col-span-1" ref={departingRef}>
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-black z-10">
            <PlaneLanding size={16} className="block" />
          </div>
          <input
            type="text"
            placeholder="Departing to"
            value={departingTo}
            onChange={(e) => {
              setDepartingTo(e.target.value);
              setShowDepartingHints(true);
            }}
            onFocus={() => setShowDepartingHints(true)}
            className="w-full bg-gray-50 border border-[#E2E8F0] pl-10 pr-8 py-3 text-black placeholder-[#94A3B8] focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20 transition-all duration-300 text-sm h-[52px]"
          />
          {departingTo && (
            <button
              onClick={() => {
                setDepartingTo("");
                setShowDepartingHints(false);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 z-10"
            >
              <X size={14} />
            </button>
          )}
          {showDepartingHints && filteredDeparting.length > 0 && (
            <div className="absolute bottom-full left-0 w-[280px] mb-1 bg-white shadow-lg border border-[#E2E8F0] max-h-52 overflow-y-auto z-[9999] custom-scrollbar">
              {filteredDeparting.map((loc) => (
                <button
                  key={loc.code}
                  onClick={() => {
                    setDepartingTo(`${loc.name} (${loc.code})`);
                    setShowDepartingHints(false);
                  }}
                  className="w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors flex items-center justify-between border-b border-[#E2E8F0] last:border-0"
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <MapPin size={14} className="text-black flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-medium text-black">
                        {loc.name}
                      </span>
                      <span className="text-xs text-black/50 ml-2">
                        {loc.country}
                      </span>
                    </div>
                  </div>
                  <div className="text-xs font-semibold text-black bg-gray-100 px-3 py-1 rounded-full flex-shrink-0 ml-2">
                    {loc.code}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Depart Date */}
        <div className="relative lg:col-span-1" ref={departCalendarRef}>
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-black z-10">
            <Calendar size={16} className="block" />
          </div>
          <button
            onClick={() => {
              setShowDepartCalendar(!showDepartCalendar);
              setShowReturnCalendar(false);
            }}
            className="w-full lg:w-45 bg-gray-50 border border-[#E2E8F0] pl-10 pr-8 py-3 text-black text-left focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20 transition-all duration-300 text-sm h-[52px]"
          >
            {departDate ? formatDisplayDate(departDate) : <span className="text-[#94A3B8]">Departure Date</span>}
          </button>
          {departDate && (
            <button
              onClick={() => {
                setDepartDate("");
                setSelectedDepartDate(null);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 z-10"
            >
              <X size={14} />
            </button>
          )}
          {showDepartCalendar && (
            <div className="absolute bottom-full left-0 mb-1 z-[9999]">
              {renderCalendar(true)}
            </div>
          )}
        </div>

        {/* Return Date - Only show for round trip */}
        {tripType === "roundtrip" && (
          <div className="relative lg:col-span-1" ref={returnCalendarRef}>
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-black z-10">
              <Calendar size={16} className="block" />
            </div>
            <button
              onClick={() => {
                setShowReturnCalendar(!showReturnCalendar);
                setShowDepartCalendar(false);
              }}
              className="w-full bg-gray-50 border border-[#E2E8F0] pl-10 pr-8 py-3 text-black text-left focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20 transition-all duration-300 text-sm h-[52px]"
            >
              {returnDate ? formatDisplayDate(returnDate) : <span className="text-[#94A3B8]">Return Date</span>}
            </button>
            {returnDate && (
              <button
                onClick={() => {
                  setReturnDate("");
                  setSelectedReturnDate(null);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 z-10"
              >
                <X size={14} />
              </button>
            )}
            {showReturnCalendar && (
              <div className="absolute bottom-full left-0 mb-1 z-[9999]">
                {renderCalendar(false)}
              </div>
            )}
          </div>
        )}

        {/* Custom Passengers Selector */}
        <div className="relative lg:col-span-1" ref={passengerRef}>
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-black z-10">
            <Users size={16} className="block" />
          </div>
          <button
            onClick={() => setShowPassengerDropdown(!showPassengerDropdown)}
            className="w-full bg-gray-50 border border-[#E2E8F0] pl-10 pr-8 py-3 text-black text-left focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20 transition-all duration-300 text-sm h-[52px] flex items-center"
          >
            <span>{passengerCount} {passengerCount === 1 ? 'Passenger' : 'Passengers'}</span>
          </button>

          {showPassengerDropdown && (
            <div className="absolute bottom-full left-0 mb-1 bg-white shadow-lg border border-[#E2E8F0] p-4 w-56 z-[9999]">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-black">Passengers</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setPassengerCount(Math.max(1, passengerCount - 1))}
                    className="w-7 h-7 rounded-full bg-gray-100 hover:bg-black/20 flex items-center justify-center transition-colors"
                  >
                    <Minus size={14} className="text-black" />
                  </button>
                  <span className="text-sm font-semibold text-black w-4 text-center">
                    {passengerCount}
                  </span>
                  <button
                    onClick={() => setPassengerCount(Math.min(10, passengerCount + 1))}
                    className="w-7 h-7 rounded-full bg-gray-100 hover:bg-black/20 flex items-center justify-center transition-colors"
                  >
                    <Plus size={14} className="text-black" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Search Button */}
        <div className="lg:col-span-1 flex items-center">
          <button
            onClick={handleSearch}
            disabled={isLoading}
            className={`w-full bg-black text-white transition-all duration-300 flex items-center justify-center h-[52px] px-6 ${
              isLoading 
                ? 'opacity-80 cursor-not-allowed' 
                : 'hover:bg-black/90 hover:scale-[1.02] active:scale-95 shadow-lg shadow-black/30 hover:shadow-black/40'
            }`}
          >
            {isLoading ? (
              <>
                <Loader2 size={20} className="mr-2 animate-spin" />
                <span>Searching...</span>
              </>
            ) : (
              <>
                <Search size={20} className="mr-2" />
                <span>Search</span>
              </>
            )}
          </button>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f5f5f5;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #000000;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #333333;
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #000000 #f5f5f5;
        }
      `}</style>
    </div>
  );
}