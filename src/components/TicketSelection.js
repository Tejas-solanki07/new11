// src/components/TicketSelection.js
import React, { useState } from 'react';
import { Crown, Star, Award, Check } from 'lucide-react';

const TicketSelection = ({ onSelect }) => {
  const [selectedTicket, setSelectedTicket] = useState(null);

  const tickets = [
    {
      id: 'platinum',
      name: 'Platinum',
      price: 9999,
      originalPrice: 12999,
      save: 3000,
      icon: Crown,
      color: 'from-amber-400 via-yellow-500 to-orange-500',
      badge: 'MOST POPULAR',
      features: [
        'VIP Front Row Seating',
        'Meet & Greet Access',
        'Exclusive Merchandise',
        'Priority Entry',
        'Complimentary Drinks'
      ]
    },
    {
      id: 'gold',
      name: 'Gold',
      price: 7499,
      originalPrice: 8999,
      save: 1500,
      icon: Star,
      color: 'from-yellow-400 to-amber-500',
      badge: '',
      features: [
        'Premium Seating',
        'Early Entry',
        'Merchandise Discount',
        'Photo Opportunity'
      ]
    },
    {
      id: 'silver',
      name: 'Silver',
      price: 4999,
      originalPrice: 5999,
      save: 1000,
      icon: Award,
      color: 'from-slate-400 to-gray-500',
      badge: '',
      features: [
        'Standard Seating',
        'Event Entry',
        'Digital Photo',
        'Basic Merch'
      ]
    }
  ];

  const handleSelect = (ticket) => {
    setSelectedTicket(ticket.id);
    if (onSelect) onSelect(ticket);
  };

  return (
    <div className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">Choose Your Ticket</h2>
          <p className="text-gray-400 text-lg">Select the experience that suits you best</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tickets.map((ticket) => {
            const Icon = ticket.icon;
            const isSelected = selectedTicket === ticket.id;

            return (
              <div
                key={ticket.id}
                onClick={() => handleSelect(ticket)}
                className={`relative bg-zinc-900 rounded-3xl p-8 border transition-all duration-300 cursor-pointer hover:border-amber-500 group
                  ${isSelected ? 'border-amber-500 scale-105 shadow-2xl shadow-amber-500/20' : 'border-zinc-800 hover:border-zinc-700'}`}
              >
                {/* Popular Badge */}
                {ticket.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-6 py-1.5 rounded-full shadow-md">
                    {ticket.badge}
                  </div>
                )}

                <div className="flex justify-center mb-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${ticket.color} flex items-center justify-center text-black shadow-lg`}>
                    <Icon size={42} strokeWidth={2} />
                  </div>
                </div>

                <h3 className="text-4xl font-bold text-center mb-1">{ticket.name}</h3>
                <p className="text-center text-gray-500 mb-6">Ticket</p>

                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center gap-3">
                    <span className="text-5xl font-bold">₹{ticket.price}</span>
                    <span className="text-xl text-gray-500 line-through">₹{ticket.originalPrice}</span>
                  </div>
                  <p className="text-green-500 font-medium mt-1">Save ₹{ticket.save}</p>
                </div>

                <ul className="space-y-4 mb-10 text-gray-300">
                  {ticket.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all
                    ${isSelected 
                      ? 'bg-white text-black' 
                      : 'bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 group-hover:border-amber-500'}`}
                >
                  {isSelected ? '✓ Selected' : 'Select Ticket'}
                </button>
              </div>
            );
          })}
        </div>

        {selectedTicket && (
          <div className="mt-12 text-center">
            <button
              onClick={() => alert(`Proceeding with ${tickets.find(t => t.id === selectedTicket).name} Ticket`)}
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-bold text-xl px-16 py-5 rounded-2xl transition-all"
            >
              Continue to Booking Details →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketSelection;