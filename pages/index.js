import { useState, useEffect, useRef } from "react";
i
mport { motion } from "framer-motion";


export default function LightspeedPro() {
  const [entered, setEntered] = useState(false);
  const [answer, setAnswer] = useState("");
  const [generated, setGenerated] = useState(false);
  const [script, setScript] = useState("");
  const [playVoice, setPlayVoice] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const voiceRef = useRef(null);

  const generateWorld = () => {
    if (answer.trim().length > 10) {
      setGenerated(true);
    }
  };

  const handleScript = () => {
    const generated = `
في تلك اللحظة التي تظن فيها أن كل شيء انتهى...
يبدأ صوتك الداخلي في الهمس:
"أنا ما زلت هنا، رغم كل شيء."
هذا الشيء الذي تخاف أن تفكر فيه هو البوابة، وليس السجن.
هو المفتاح، وليس القيد.
لذا لا تتهرّب، لا تخف.
ارفع رأسك، وانظر إلى داخلك.
هنا، حيث يبدأ كل شيء...
`;
    setScript(generated);
  };

  const handleVoice = () => {
    setPlayVoice(true);
    voiceRef.current?.play();
  };

  const handleVideo = () => {
    setShowVideo(true);
  };

  const handlePDF = () => {
    alert("جارٍ تجهيز ملف PDF يحتوي على عالمك الداخلي… 📘");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#05060f] via-[#0b0e1c] to-[#1c1e2f] text-white flex items-center justify-center relative overflow-hidden px-4 font-sans">
      <div className="absolute inset-0 bg-[url('/stars.gif')] bg-cover bg-center opacity-20 z-0 animate-pulse" />

      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover opacity-20 z-0 mix-blend-screen"
      >
        <source src="/lightspeed_galaxy_bg.mp4" type="video/mp4" />
      </video>

      <audio autoPlay loop className="hidden">
        <source src="/whispering-stars.mp3" type="audio/mp3" />
      </audio>

      <audio ref={voiceRef} className="hidden">
        <source src="/script-voice.mp3" type="audio/mp3" />
      </audio>

      {showVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="relative max-w-4xl w-full aspect-video">
            <video
              controls
              autoPlay
              className="w-full h-full rounded-xl shadow-xl border border-white/20"
            >
              <source src="/motivational-video.mp4" type="video/mp4" />
            </video>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-2 text-white bg-red-600 hover:bg-red-700 rounded-full px-3 py-1 text-sm"
            >
              إغلاق ✖
            </button>
          </div>
        </div>
      )}

      {!entered ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="z-10 text-center px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-500 mb-8 drop-shadow-xl">
            هل أنت مستعد لمواجهة ما لم تفهمه فيك؟
          </h1>
          <button
            onClick={() => setEntered(true)}
            className="bg-white text-black px-6 py-3 rounded-xl text-lg font-semibold hover:bg-gray-100 transition shadow-md hover:scale-105"
          >
            فتح البوابة
          </button>
        </motion.div>
      ) : !generated ? (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10 text-center px-6 max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-purple-200 drop-shadow-lg">
            ما هو الشيء الذي تخاف أن تفكر فيه، لكنه لا يفارقك؟
          </h2>
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="اكتب هنا..."
            className="w-full p-4 rounded-xl bg-white/10 border border-white/20 backdrop-blur text-white min-h-[150px] placeholder-gray-400"
          />
          <button
            onClick={generateWorld}
            className="mt-6 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-semibold shadow-md hover:scale-105"
          >
            أطلق ذاتي 🧠
          </button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="z-10 text-center max-w-3xl bg-white/5 border border-purple-400/20 backdrop-blur-lg p-10 rounded-3xl shadow-2xl"
        >
          <h3 className="text-4xl font-bold text-fuchsia-400 mb-6 drop-shadow-lg">
            تم فتح عالمك الداخلي 🔓
          </h3>
          <p className="text-lg text-gray-200 leading-loose">
            بناءً على إجابتك:
            <br />
            <span className="italic text-white">"{answer}"</span>
            <br />
            قمنا بتوليد مشروع يمثل أعماقك… فيديو تحفيزي بصوتك، سكربت يعبّر عنك، ومشهد يعكس ذاتك.
          </p>
          <div className="mt-8 grid gap-4">
            <button
              onClick={handleScript}
              className="bg-gradient-to-r from-purple-600 to-indigo-700 px-6 py-3 rounded-xl text-white font-semibold hover:scale-105 transition shadow-md"
            >
              🎬 عرض السكربت المولّد
            </button>
            <button
              onClick={handleVoice}
              className="bg-gradient-to-r from-pink-600 to-purple-700 px-6 py-3 rounded-xl text-white font-semibold hover:scale-105 transition shadow-md"
            >
              🔊 تشغيل الراوي الصوتي
            </button>
            <button
              onClick={handleVideo}
              className="bg-gradient-to-r from-cyan-600 to-blue-700 px-6 py-3 rounded-xl text-white font-semibold hover:scale-105 transition shadow-md"
            >
              📽️ مشاهدة الفيديو التحفيزي
            </button>
            <button
              onClick={handlePDF}
              className="bg-gradient-to-r from-green-500 to-emerald-700 px-6 py-3 rounded-xl text-white font-semibold hover:scale-105 transition shadow-md"
            >
              📘 تحميل ملف PDF الخاص بك
            </button>
          </div>

          {script && (
            <div className="mt-10 bg-white/10 border border-white/20 p-6 rounded-xl text-left text-white shadow-inner animate-fade-in">
              <h4 className="text-xl font-bold mb-2 text-purple-300">السكريبت الخاص بك:</h4>
              <p className="whitespace-pre-line leading-relaxed">{script}</p>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}
