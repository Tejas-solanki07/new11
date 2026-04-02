import React, { useState } from 'react';
import { Check, Users, Crown, Star, Award } from 'lucide-react';

const TicketSelection = ({ onSelect }) => {
  const [selectedTicket, setSelectedTicket] = useState(null);

  const tickets = [
    {
      id: 'platinum',
      name: 'Platinum',
      price: 9999,
      originalPrice: 12999,
      icon: Crown,
      color: 'from-yellow-400 to-amber-600',
      features: [
        'VIP Front Row Seating',
        'Meet & Greet Access',
        'Exclusive Merchandise',
        'Priority Entry',
        'Complimentary Drinks'
      ],
      popular: true
    },
    {
      id: 'gold',
      name: 'Gold',
      price: 7499,
      originalPrice: 8999,
      icon: Star,
      color: 'from-amber-500 to-yellow-600',
      features: [
        'Premium Seating',
        'Early Entry',
        'Merchandise Discount',
        'Photo Opportunity'
      ],
      popular: false
    },
    {
      id: 'silver',
      name: 'Silver',
      price: 4999,
      originalPrice: 5999,
      icon: Award,
      color: 'from-gray-400 to-slate-500',
      features: [
        'Standard Seating',
        'Event Entry',
        'Digital Photo',
        'Basic Merch'
      ],
      popular: false
    }
  ];

  const handleSelect = (ticket) => {
    setSelectedTicket(ticket.id);
    if (onSelect) onSelect(ticket);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">Choose Your Ticket</h2>
        <p className="text-lg text-gray-600">Select the experience that suits you best</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {tickets.map((ticket) => {
          const Icon = ticket.icon;
          const isSelected = selectedTicket === ticket.id;

          return (
            <div
              key={ticket.id}
              onClick={() => handleSelect(ticket)}
              className={`relative bg-white rounded-3xl overflow-hidden shadow-xl border-2 transition-all duration-300 cursor-pointer hover:-translate-y-2
                ${isSelected ? 'border-[#1a3c34] scale-105' : 'border-transparent'}`}
            >
              {/* Popular Badge */}
              {ticket.popular && (
                <div className="absolute top-6 right-6 bg-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}

              <div className={`h-2 bg-gradient-to-r ${ticket.color}`} />

              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${ticket.color} flex items-center justify-center text-white`}>
                    <Icon size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">{ticket.name}</h3>
                    <p className="text-gray-500">Ticket</p>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold">₹{ticket.price.toLocaleString('en-IN')}</span>
                    <span className="text-gray-400 line-through">₹{ticket.originalPrice.toLocaleString('en-IN')}</span>
                  </div>
                  <p className="text-green-600 font-medium">Save ₹{(ticket.originalPrice - ticket.price).toLocaleString('en-IN')}</p>
                </div>

                <ul className="space-y-4 mb-10">
                  {ticket.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all
                    ${isSelected 
                      ? 'bg-[#1a3c34] text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}
                >
                  {isSelected ? 'Selected ✓' : 'Select Ticket'}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {selectedTicket && (
        <div className="mt-12 text-center">
          <button
            onClick={() => alert(`Proceeding with ${tickets.find(t => t.id === selectedTicket).name} Ticket`)}
            className="bg-[#1a3c34] text-white px-12 py-4 rounded-2xl text-xl font-semibold hover:bg-black transition"
          >
            Continue to Booking Details →
          </button>
        </div>
      )}
    </div>
  );
};

export default TicketSelection;