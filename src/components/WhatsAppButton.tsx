import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '919790731131';
    const message = 'Hello! I would like to know more about your services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-colors duration-300"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </button>
    </div>
  );
};