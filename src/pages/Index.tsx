import { Heart, Sparkles, Star, Coffee, Music, Smile, Play, Pause } from "lucide-react";
import { useState, useRef } from "react";
import piyu1 from "@/assets/piyu-1.jpeg";
import piyu2 from "@/assets/piyu-2.jpeg";
import piyu3 from "@/assets/piyu-3.jpeg";
const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-romantic-gradient">
      {/* Decorative floating elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 text-primary/30 animate-float">
          <Heart className="w-8 h-8" fill="currentColor" />
        </div>
        <div className="absolute top-40 right-20 text-rose/20 animate-float delay-300">
          <Sparkles className="w-6 h-6" />
        </div>
        <div className="absolute bottom-40 left-20 text-primary/20 animate-float delay-500">
          <Star className="w-5 h-5" fill="currentColor" />
        </div>
        <div className="absolute top-60 right-10 text-rose/25 animate-float delay-700">
          <Heart className="w-6 h-6" fill="currentColor" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
        <div className="text-center animate-fade-in-up">
          <p className="text-muted-foreground text-lg mb-4 tracking-widest uppercase font-light">
            For Someone Special
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl text-foreground mb-6 leading-tight">
            Piyu
          </h1>
          <div className="flex items-center justify-center gap-3 text-primary">
            <span className="w-12 h-px bg-primary/50" />
            <Heart className="w-5 h-5 animate-pulse-soft" fill="currentColor" />
            <span className="w-12 h-px bg-primary/50" />
          </div>
          <p className="mt-8 text-muted-foreground font-light text-lg max-w-md mx-auto">
            A little corner of the internet, just for you
          </p>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 animate-fade-in delay-800">
          <div className="w-6 h-10 rounded-full border-2 border-primary/40 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary/60 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-24 px-6 bg-soft-gradient">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center text-foreground mb-4 animate-fade-in-up">
            Captured Moments
          </h2>
          <p className="text-center text-muted-foreground mb-16 animate-fade-in-up delay-100">
            Every picture tells our story
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[piyu1, piyu2, piyu3].map((photo, index) => (
              <div
                key={index}
                className={`card-romantic bg-card rounded-2xl overflow-hidden animate-fade-in-up`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={photo} 
                    alt={`Piyu ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Her Section */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Sparkles className="w-8 h-8 text-primary mx-auto mb-6 animate-fade-in-up" />
          <h2 className="text-4xl md:text-5xl text-foreground mb-8 animate-fade-in-up delay-100">
            About You
          </h2>
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card animate-fade-in-up delay-200">
            <p className="text-lg md:text-xl text-foreground leading-relaxed font-light">
              I didn't expect to connect with someone this quickly, but you've got this warmth that just stays with me. I really like that about you.
            </p>
            <div className="flex items-center justify-center gap-3 mt-8 text-primary/60">
              <span className="w-8 h-px bg-primary/30" />
              <Heart className="w-4 h-4" fill="currentColor" />
              <span className="w-8 h-px bg-primary/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Why You're Amazing Section */}
      <section className="py-24 px-6 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center text-foreground mb-4 animate-fade-in-up">
            Why You're Amazing
          </h2>
          <p className="text-center text-muted-foreground mb-16 animate-fade-in-up delay-100">
            Just a few of the countless reasons
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Star, text: "Your smile lights up every room you walk into" },
              { icon: Heart, text: "You seem like someone with a really good heart. It's something I noticed quickly" },
              { icon: Coffee, text: "You have a really positive vibe… talking to you just feels nice" },
              { icon: Smile, text: "You make even ordinary days feel magical" },
            ].map((item, index) => (
              <div
                key={index}
                className={`card-romantic bg-card rounded-2xl p-6 flex items-start gap-4 animate-fade-in-up delay-${(index + 2)}00`}
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-rose" />
                </div>
                <p className="text-foreground font-light leading-relaxed pt-2">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Note Section */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <Heart className="w-16 h-16 text-primary mx-auto mb-8 animate-float" fill="currentColor" />
          <h2 className="text-4xl md:text-5xl text-foreground mb-8 animate-fade-in-up">
            A Final Note
          </h2>
          <div className="bg-gradient-to-br from-blush/30 to-lavender/30 rounded-3xl p-8 md:p-12 animate-fade-in-up delay-200">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed font-display">
              I'm really glad you accepted my request. The way we've connected so easily — it's not something that happens with everyone. And I won't lie, I really like talking to you.
            </p>
            <p className="mt-8 text-2xl md:text-3xl text-rose font-display">
              Thank you for being you ♡
            </p>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section className="py-16 px-6 bg-soft-gradient">
        <div className="max-w-md mx-auto text-center">
          <Music className="w-10 h-10 text-primary mx-auto mb-4 animate-fade-in-up" />
          <h2 className="text-3xl md:text-4xl text-foreground mb-6 animate-fade-in-up delay-100">
            For the one who makes everything better
          </h2>
          <div className="card-romantic bg-card rounded-3xl p-6 animate-fade-in-up delay-200">
            <p className="text-muted-foreground text-sm mb-4">
              Click play to listen
            </p>
            <button
              onClick={togglePlay}
              className="w-16 h-16 rounded-full bg-primary/20 hover:bg-primary/30 flex items-center justify-center mx-auto transition-all duration-300 hover:scale-110"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-rose" fill="currentColor" />
              ) : (
                <Play className="w-6 h-6 text-rose ml-1" fill="currentColor" />
              )}
            </button>
            <audio
              ref={audioRef}
              src="/audio/zaalima.mp3"
              onEnded={() => setIsPlaying(false)}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center">
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-rose animate-pulse-soft" fill="currentColor" />
          <span>for you</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
