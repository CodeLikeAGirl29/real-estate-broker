export default function Map() {
  // This is a centered view of the Fort Walton Beach / Destin area
  const mapSource = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110123.456789!2d-86.6481!3d30.4203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88913e277832870d%3A0x7e296e8e8e78860!2sFort%20Walton%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1711310000000!5m2!1sen!2sus";

  return (
    <section className="w-full h-[450px] bg-slate-100 relative grayscale-[20%] hover:grayscale-0 transition-all duration-700">
      <iframe
        src={mapSource}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Lindsey Howard Service Area"
        className="opacity-80 hover:opacity-100 transition-opacity"
      />

      {/* Narrative Overlay */}
      <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-md p-6 rounded-sm shadow-xl max-w-xs border border-teal-50">
        <h4 className="font-serif text-xl text-slate-900 mb-2">Coastal Coverage</h4>
        <p className="text-slate-500 text-xs leading-relaxed font-light">
          Serving the unique narratives of <strong>Fort Walton Beach</strong>, <strong>Shalimar</strong>, and <strong>Pensacola</strong>. From the bayous to the beaches.
        </p>
      </div>
    </section>
  );
}