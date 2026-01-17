"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle2, IndianRupee, Sparkles, Info } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { bhkConfigurations, calculateEstimate, getRecommendations } from "@/lib/cost-calculator";
import AuthModal from "@/components/AuthModal";

export default function CalculatorPage() {
  const params = useParams();
  const router = useRouter();
  const bhkType = params.bhkType as string;

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [estimatedCost, setEstimatedCost] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [user, setUser] = useState<any>(null);
  const [showAuth, setShowAuth] = useState(false);

  const config = bhkConfigurations[bhkType];
const handleLogout = async () => {
  await fetch("/api/auth/logout", { method: "POST" });
  window.location.reload();
};

  // Fetch logged-in user
  useEffect(() => {
    fetch("/api/auth/me")
      .then(r => r.json())
      .then(d => setUser(d.user || null));
  }, []);

  // Update estimate + recommendations
  useEffect(() => {
    if (!config) {
      router.push("/");
      return;
    }
    const est = calculateEstimate(bhkType, selectedOptions);
    if (est) {
      setEstimatedCost(est.totalCost);
    }
    setRecommendations(getRecommendations(bhkType, selectedOptions));
  }, [selectedOptions, bhkType, config, router]);

  if (!config) return null;

  const handleOptionToggle = (optionId: string) => {
    setSelectedOptions(prev =>
      prev.includes(optionId) ? prev.filter(id => id !== optionId) : [...prev, optionId]
    );
  };

  // Auth + Reveal + Save flow
  const handleGetEstimate = () => {
    if (!user) {
      setShowAuth(true);
      return;
    }
    revealAndSave();
  };

  const revealAndSave = async () => {
    setShowResult(true);

    const est = calculateEstimate(bhkType, selectedOptions);

    if (!est) return;

    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }, 200);

    await fetch("/api/estimates/save", {
      method: "POST",
      body: JSON.stringify({
        bhk: bhkType,
        basePackage: est.basePackage,
        upgrades: est.upgrades,
        complexityFactor: est.complexityFactor,
        totalCost: est.totalCost
      })
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(amount);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

return (
  <div className="min-h-screen bg-background text-foreground">
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-2xl z-50 border-b border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-foreground hover:opacity-70 transition-all hover:scale-105 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold">Back to Home</span>
        </Link>
        {/* show logout only if user is logged in */}
        {user && (
          <button
            onClick={handleLogout}
            className="text-sm font-semibold border border-foreground px-3 py-1 rounded-lg hover:bg-foreground hover:text-background transition-all"
          >
            Logout
          </button>
        )}
      </div>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <Badge className="bg-foreground text-background px-5 py-2.5 text-sm font-bold shadow-lg shadow-black/20">
          {config.type.toUpperCase()} - {config.sqftRange}
        </Badge>
      </div>
    </nav>

      <div className="pt-24 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-8xl font-bold mb-4">
              Customize Your <span className="text-foreground/40">{config.type.toUpperCase()}</span>
            </h1>
            <p className="text-xl text-foreground/70 font-medium max-w-2xl mx-auto">
              Select premium upgrades for your dream home and get an instant AI-powered cost estimate
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} variants={containerVariants}>
                <Card className="p-8 border-2 border-foreground/10 shadow-xl">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Sparkles className="w-8 h-8 animate-pulse" />
                    Premium Upgrades
                  </h2>

                  <div className="grid gap-4">
                    {config.options.map(option => (
                      <motion.div key={option.id} variants={itemVariants} whileHover={{ scale: 1.01, x: 5 }}>
                        <label className="flex items-start gap-4 p-6 rounded-2xl border bg-foreground/2 cursor-pointer group">
                          <Checkbox
                            checked={selectedOptions.includes(option.id)}
                            onCheckedChange={() => handleOptionToggle(option.id)}
                            className="w-6 h-6"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xl font-bold">{option.name}</span>
                              <span className={`font-bold ${!user ? "blur-sm select-none" : ""}`}>
                                +{formatCurrency(option.baseCost)}
                              </span>
                            </div>
                            <p className="text-foreground/60">{option.description}</p>
                          </div>
                        </label>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                <Card className="p-8 border-dashed border-2 border-foreground/20 rounded-3xl">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Info className="w-7 h-7" />
                    Base Package Includes
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {config.baseIncludes.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="p-4 rounded-xl border border-foreground/5 bg-background/50"
                      >
                        <span className="font-bold">{item.name}</span>
                        <p className="text-xs text-foreground/50">{item.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                  <Card className="p-8 border-4 border-foreground shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
                    <h3 className="text-3xl font-bold mb-8 uppercase">Estimate</h3>

                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between p-4 border rounded-xl bg-foreground/5">
                        <span className="font-bold">Base Package</span>
                        <span className={`font-bold text-xl ${!user ? "blur-sm select-none" : ""}`}>
                          {formatCurrency(config.basePrice)}
                        </span>
                      </div>

                      <AnimatePresence>
                        {selectedOptions.map(optionId => {
                          const option = config.options.find(opt => opt.id === optionId);
                          if (!option) return null;
                          return (
                            <motion.div
                              key={optionId}
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="flex justify-between text-sm p-3 border rounded-lg bg-foreground/3"
                            >
                              <span className="font-semibold">{option.name}</span>
                              <span className={`font-bold ${!user ? "blur-sm select-none" : ""}`}>
                                +{formatCurrency(option.baseCost)}
                              </span>
                            </motion.div>
                          );
                        })}
                      </AnimatePresence>

                      {selectedOptions.length > 0 && (
                        <div className="flex justify-between text-xs p-3 border italic">
                          <span>AI Complexity Factor</span>
                          <span>+{selectedOptions.length * 1}%</span>
                        </div>
                      )}
                    </div>

                    <div className="border-t-4 border-foreground pt-8 mb-8">
                      {user ? (
                        <div className="text-center">
                          <span className="text-sm font-bold opacity-40 uppercase tracking-widest">Estimated Total</span>
                          <div className="text-6xl font-bold flex justify-center">
                            <IndianRupee className="w-10 h-10" />
                            {estimatedCost.toLocaleString("en-IN")}
                          </div>
                        </div>
                      ) : (
                        <p className="text-center font-bold opacity-60">Login to reveal pricing</p>
                      )}
                    </div>

                    {!showResult ? (
                      <Button
                        onClick={handleGetEstimate}
                        className="w-full bg-foreground text-background py-8 text-xl rounded-2xl"
                      >
                        <Sparkles className="w-6 h-6 mr-3" />
                        Get Final Estimate
                      </Button>
                    ) : (
                      <div className="space-y-4">
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                          <CheckCircle2 className="w-12 h-12 mx-auto mb-3" />
                          <h4 className="text-xl font-bold text-center uppercase">Estimate Ready</h4>
                        </motion.div>
                        <Button className="w-full border-4 border-foreground text-foreground py-6 text-xl rounded-2xl" asChild>
                          <a href="tel:09007307197">Book Consultation</a>
                        </Button>
                      </div>
                    )}
                  </Card>
                </motion.div>

                {showResult && recommendations.length > 0 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                    <Card className="p-6 border-2 border-foreground bg-foreground text-background shadow-xl">
                      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <Sparkles className="w-5 h-5" /> AI Designer Notes
                      </h3>
                      <ul className="space-y-3">
                        {recommendations.map((rec, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + index * 0.1 }}
                            className="text-sm p-3 border rounded-lg bg-background/10"
                          >
                            {rec}
                          </motion.li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {showAuth && (
        <AuthModal
          onSuccess={() => {
            fetch("/api/auth/me")
              .then(r => r.json())
              .then(d => {
                setUser(d.user);
                setShowAuth(false);
                revealAndSave();
              });
          }}
          onClose={() => setShowAuth(false)}
        />
      )}

      <section className="py-24 px-6 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-6xl font-bold mb-8">
            LET'S BUILD YOUR DREAM.
          </motion.h2>
          <Button size="lg" className="bg-background text-foreground font-bold text-2xl py-10 px-12 rounded-3xl" asChild>
            <a href="tel:09007307197">CALL NOW</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
