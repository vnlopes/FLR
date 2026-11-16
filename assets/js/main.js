/**
 * F.L.R. MECÂNICA DIESEL E SOLDA EM GERAL
 * Interactive Portfolio, Mobile Touch UX, Scroll-Write Manifesto & Results Engine
 * WhatsApp Oficial: +55 (19) 99791-1326
 */

const FLR_WHATSAPP = "5519997911326";

const TECHNICAL_SPECS = {
  campo: {
    code: "UNIDADE MÓVEL · 001",
    title: "Resgate e Atendimento em Campo",
    subtitle: "Oficina móvel completa direto na lavoura, floresta, usina, obra ou rodovia.",
    description:
      "Evite custos altíssimos de prancha e dias de máquina parada aguardando remoção. Nossa frota de socorro conta com caminhão-oficina equipado com compressor industrial, talha, máquina de solda, bancada ferramental e scanner de diagnóstico eletrônico pesado.",
    items: [
      "Diagnóstico computadorizado multimarcas direto na frente de trabalho",
      "Soldas pesadas estruturais e recuperação de implementos em campo",
      "Reparo de mangueiras, comandos, bombas e cilindros hidráulicos e pneumáticos",
      "Destravamento e reparo emergencial de motores, partida, alternador e freios",
      "Atendimento em Lençóis Paulista, Mineiros do Tietê e toda a região"
    ],
    whatsappText:
      "Olá, equipe F.L.R.! Preciso de *Resgate / Atendimento em Campo* para uma máquina parada."
  },
  agricola: {
    code: "OPERAÇÃO SEVERA · 002",
    title: "Força Agrícola, Florestal & Linha Amarela",
    subtitle: "Manutenção preparada para o regime severo da terra, da madeira e da cana.",
    description:
      "Atendemos usinas sucroalcooleiras, empresas florestais, sitiantes, agricultores, locadoras e empresas de terraplanagem. Conhecemos a exigência da safra e o custo de cada hora de equipamento parado.",
    items: [
      "Tratores, colheitadeiras de cana e grãos, pulverizadores e implementos",
      "Escavadeiras hidráulicas, cabeçotes florestais (garra traçadora/harvester) e pás carregadeiras",
      "Retroescavadeiras, motoniveladoras e rolos compactadores",
      "Revisão de entressafra, preventiva programada e reforma mecânica completa",
      "Hidráulica pesada, embuchamento, solda mig/eletrodo e climatização de cabines"
    ],
    whatsappText:
      "Olá, equipe F.L.R.! Gostaria de falar sobre manutenção de *Máquina Agrícola / Linha Amarela / Florestal*."
  },
  frotas: {
    code: "DIESEL PESADO & LEVE · 003",
    title: "Frotas Pesadas & Linha Leve Diesel",
    subtitle: "Solução de ponta a ponta para transportadoras, locadoras e rodoviários.",
    description:
      "Centralize a manutenção da sua frota em um único centro técnico em Lençóis Paulista. Da caminhonete de apoio ao caminhão canavieiro, florestal ou rodoviário, entregamos transparência, agilidade e preço justo.",
    items: [
      "Caminhões rodoviários, canavieiros, florestais e basculantes",
      "Utilitários e picapes linha leve diesel (frotas operacionais e apoio rural)",
      "Freios a ar, válvula, cuícas, troca de lonas, tambores e feixes de molas",
      "Elétrica completa, climatização (ar-condicionado) e diagnóstico de injeção",
      "Borracharia pesada, lavagem técnica de chassi/motor e lubrificação"
    ],
    whatsappText:
      "Olá, equipe F.L.R.! Quero solicitar manutenção para *Caminhão / Frota Diesel*."
  },
  motores: {
    code: "ENGENHARIA MECÂNICA · TREM DE FORÇA",
    title: "Motores, Câmbio, Diferencial & Diagnóstico",
    subtitle: "Identificamos a falha exata sem tentativas cegas, garantindo agilidade e custo justo.",
    description:
      "Nascemos da paixão pelos motores a diesel. Executamos desde o diagnóstico eletrônico de falha de injeção e sensores até a retífica completa de motores estacionários, agrícolas e caminhões, além de transmissão e diferencial.",
    items: [
      "Retífica completa e parcial de motores diesel (cabeçote, kit, bronzinas, bloco)",
      "Diagnóstico eletrônico de precisão (leitura de parâmetros em tempo real, sistema Common Rail, Arla 32)",
      "Revisão e reconstrução de caixas de câmbio manuais e automatizadas",
      "Manutenção de diferenciais, redutores de cubo e tomadas de força (TDP)",
      "Regulagem de válvulas, unidade injetora, turbina e sistema de arrefecimento"
    ],
    whatsappText:
      "Olá, equipe F.L.R.! Preciso de avaliação em *Motor / Câmbio / Diferencial / Diagnóstico Eletrônico*."
  },
  estrutura360: {
    code: "SOLUÇÕES 360º · CENTRO COMPLETO",
    title: "Estrutura Completa em um Único Lugar",
    subtitle: "Não terceirize o seu tempo: 12 especialidades integradas dentro da F.L.R.",
    description:
      "Você não precisa levar o caminhão ou trator em quatro oficinas diferentes para resolver mecânica, solda, ar-condicionado e molas. Nossa equipe própria domina todas as etapas do reparo.",
    items: [
      "Hidráulica e Pneumática: bombas, comandos, pistões, válvulas e linhas de ar",
      "Elétrica e Ar-Condicionado: chicotes, alternadores, motores de partida e carga/higienização de A/C",
      "Soldas em Geral e Pesadas: recuperação estrutural de chassi, caçambas, garras e implementos",
      "Suspensão e Rodagem: feixes de molas, embuchamento, troca de lonas, freios e borracharia",
      "Conservação: lavagem pesada e lubrificação completa de frota"
    ],
    whatsappText:
      "Olá, equipe F.L.R.! Gostaria de um orçamento com a *Estrutura 360º (Mecânica, Hidráulica, Elétrica, Solda ou Freios)*."
  }
};

const DOWNTIME_SCENARIOS = {
  safra: {
    label: "Colheitadeira / Trator na Safra",
    tradHours: "48h a 72h paradas",
    flrHours: "Atendimento imediato no talhão",
    savingPct: "Até 78% menos tempo parado",
    detail: "Sem desmontagem para prancha ou espera de transporte especial até a cidade."
  },
  florestal: {
    label: "Escavadeira / Garra Florestal",
    tradHours: "3 a 5 dias de logística",
    flrHours: "Solda, hidráulica e motor in-loco",
    savingPct: "Zero custo de prancha pesada",
    detail: "Caminhão-oficina leva compressor, solda pesada, talha e bancada direto à floresta."
  },
  frota: {
    label: "Caminhão Canavieiro / Rodoviário",
    tradHours: "3 a 4 oficinas diferentes",
    flrHours: "1 única parada 360º na F.L.R.",
    savingPct: "100% resolvido no mesmo galpão",
    detail: "Motor, câmbio, diferencial, freios, molas, elétrica e ar-condicionado integrados."
  }
};

function buildWhatsAppUrl(message) {
  return `https://wa.me/${FLR_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

document.addEventListener("DOMContentLoaded", () => {
  // ==========================================================================
  // 1. BIDIRECTIONAL SCROLL ENTRANCE & EXIT OBSERVER
  // ==========================================================================
  const animatedNodes = document.querySelectorAll(
    "[data-reveal], [data-reveal-img], [data-reveal-cutout]"
  );

  if ("IntersectionObserver" in window) {
    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.add("is-inview");
            el.classList.remove("is-exited-top", "is-exited-bottom");
          } else {
            el.classList.remove("is-inview");
            if (entry.boundingClientRect.top < 0) {
              el.classList.add("is-exited-top");
              el.classList.remove("is-exited-bottom");
            } else {
              el.classList.add("is-exited-bottom");
              el.classList.remove("is-exited-top");
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-2% 0px -4% 0px"
      }
    );

    animatedNodes.forEach((node) => scrollObserver.observe(node));
  } else {
    animatedNodes.forEach((node) => node.classList.add("is-inview"));
  }

  // ==========================================================================
  // 2. SCROLL-DRIVEN TYPEWRITER / WORD REVEAL (#historia)
  // ==========================================================================
  const historiaSection = document.getElementById("historia");
  const historiaTextContainer = document.getElementById("historia-scroll-text");
  const historiaProgressFill = document.getElementById("historia-progress-fill");
  const historiaProgressPct = document.getElementById("historia-progress-pct");

  const MANIFESTO_SEGMENTS = [
    { text: "Nascemos em 2022, em Mineiros do Tietê,", style: "normal" },
    { text: "movidos pela paixão pelos motores a diesel e pelo compromisso com a verdade.", style: "bold" },
    { text: "Com Deus em primeiro lugar, superamos cada desafio para construir em Lençóis Paulista um centro de soluções completo, unindo", style: "normal" },
    { text: "transparência, agilidade e preço justo", style: "accent" },
    { text: "para quem move o Brasil.", style: "normal" }
  ];

  let wordSpans = [];
  let cursorEl = null;

  if (historiaTextContainer) {
    historiaTextContainer.innerHTML = "";
    MANIFESTO_SEGMENTS.forEach((seg) => {
      const words = seg.text.split(" ");
      words.forEach((w) => {
        const span = document.createElement("span");
        span.className = "scroll-write-word";
        if (seg.style === "bold") span.classList.add("is-bold");
        if (seg.style === "accent") span.classList.add("is-accent");
        span.textContent = w;
        historiaTextContainer.appendChild(span);
        historiaTextContainer.appendChild(document.createTextNode(" "));
        wordSpans.push(span);
      });
    });

    cursorEl = document.createElement("span");
    cursorEl.className = "scroll-write-cursor";
    cursorEl.setAttribute("aria-hidden", "true");
    if (wordSpans.length > 0) {
      wordSpans[0].after(cursorEl);
    }
  }

  function updateScrollTypewriter() {
    if (!historiaSection || wordSpans.length === 0) return;
    const rect = historiaSection.getBoundingClientRect();
    const vh = window.innerHeight;

    const isMobile = window.innerWidth < 768;
    const startY = vh * (isMobile ? 0.86 : 0.82);
    const endY = vh * (isMobile ? 0.24 : 0.18);
    const rawProgress = (startY - rect.top) / (startY - endY);
    const progress = Math.max(0, Math.min(1, rawProgress));

    const activeCount = Math.round(progress * wordSpans.length);

    wordSpans.forEach((span, idx) => {
      if (idx < activeCount) {
        span.classList.add("is-typed");
      } else {
        span.classList.remove("is-typed");
      }
    });

    if (cursorEl) {
      const targetIdx = Math.max(0, Math.min(wordSpans.length - 1, activeCount - 1));
      if (activeCount === 0) {
        historiaTextContainer.prepend(cursorEl);
      } else {
        wordSpans[targetIdx].after(cursorEl);
      }
    }

    const pct = Math.round(progress * 100);
    if (historiaProgressFill) historiaProgressFill.style.width = `${pct}%`;
    if (historiaProgressPct) historiaProgressPct.textContent = `${pct}%`;
  }

  // ==========================================================================
  // 3. CONTINUOUS AUTO-SCROLLING CAROUSEL + MOBILE TOUCH SWIPE SUPPORT
  // ==========================================================================
  const carouselTrack = document.getElementById("gallery-carousel-track");
  const prevBtn = document.getElementById("carousel-prev");
  const nextBtn = document.getElementById("carousel-next");
  const toggleBtn = document.getElementById("carousel-toggle");
  const toggleLabel = document.getElementById("carousel-toggle-label");

  let carouselOffset = 0;
  let carouselSpeed = 0.7;
  let isCarouselPaused = false;
  let isHoverPaused = false;
  let isTouchDragging = false;
  let touchStartX = 0;
  let touchLastX = 0;
  let touchMovedDistance = 0;

  if (carouselTrack) {
    const originalSlides = Array.from(carouselTrack.children);
    originalSlides.forEach((slide) => {
      const clone = slide.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      carouselTrack.appendChild(clone);
    });

    function normalizeCarouselOffset() {
      const halfWidth = carouselTrack.scrollWidth / 2;
      if (halfWidth <= 0) return;
      if (carouselOffset > 0) {
        carouselOffset -= halfWidth;
      } else if (Math.abs(carouselOffset) >= halfWidth) {
        carouselOffset += halfWidth;
      }
    }

    function animateCarousel() {
      if (!isCarouselPaused && !isHoverPaused && !isTouchDragging) {
        carouselOffset -= carouselSpeed;
        normalizeCarouselOffset();
        carouselTrack.style.transform = `translate3d(${carouselOffset.toFixed(2)}px, 0, 0)`;
      }
      window.requestAnimationFrame(animateCarousel);
    }

    window.requestAnimationFrame(animateCarousel);

    carouselTrack.addEventListener("mouseenter", () => {
      isHoverPaused = true;
    });
    carouselTrack.addEventListener("mouseleave", () => {
      isHoverPaused = false;
    });

    // Touch Swipe Support for Mobile
    carouselTrack.addEventListener(
      "touchstart",
      (e) => {
        if (!e.touches || e.touches.length === 0) return;
        isTouchDragging = true;
        touchStartX = e.touches[0].clientX;
        touchLastX = touchStartX;
        touchMovedDistance = 0;
        carouselTrack.style.transition = "";
      },
      { passive: true }
    );

    carouselTrack.addEventListener(
      "touchmove",
      (e) => {
        if (!isTouchDragging || !e.touches || e.touches.length === 0) return;
        const currentX = e.touches[0].clientX;
        const deltaX = currentX - touchLastX;
        touchMovedDistance += Math.abs(deltaX);
        touchLastX = currentX;
        carouselOffset += deltaX;
        normalizeCarouselOffset();
        carouselTrack.style.transform = `translate3d(${carouselOffset.toFixed(2)}px, 0, 0)`;
      },
      { passive: true }
    );

    carouselTrack.addEventListener(
      "touchend",
      () => {
        isTouchDragging = false;
      },
      { passive: true }
    );

    const stepCarousel = (dir) => {
      const slideWidth = carouselTrack.firstElementChild?.getBoundingClientRect().width || 300;
      carouselOffset += dir * slideWidth;
      normalizeCarouselOffset();
      carouselTrack.style.transition = "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)";
      carouselTrack.style.transform = `translate3d(${carouselOffset.toFixed(2)}px, 0, 0)`;
      setTimeout(() => {
        carouselTrack.style.transition = "";
      }, 460);
    };

    if (prevBtn) prevBtn.addEventListener("click", () => stepCarousel(1));
    if (nextBtn) nextBtn.addEventListener("click", () => stepCarousel(-1));
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        isCarouselPaused = !isCarouselPaused;
        if (toggleLabel) {
          toggleLabel.textContent = isCarouselPaused ? "Retomar ▶" : "Pausar ❚❚";
        }
      });
    }
  }

  // ==========================================================================
  // 4. DYNAMIC RESULTS & ANIMATED COUNTERS (#resultados)
  // ==========================================================================
  const resultsSection = document.getElementById("resultados");
  const counterEls = document.querySelectorAll("[data-counter]");
  const barEls = document.querySelectorAll("[data-bar-width]");

  function animateCounters(play) {
    counterEls.forEach((el) => {
      const target = parseInt(el.getAttribute("data-counter"), 10) || 0;
      const prefix = el.getAttribute("data-prefix") || "";
      const suffix = el.getAttribute("data-suffix") || "";

      if (!play) {
        el.textContent = `${prefix}0${suffix}`;
        return;
      }

      const duration = 1300;
      const startTime = performance.now();

      function tick(now) {
        const elapsed = now - startTime;
        const t = Math.min(1, elapsed / duration);
        const eased = 1 - Math.pow(1 - t, 4);
        const current = Math.round(eased * target);
        el.textContent = `${prefix}${current}${suffix}`;
        if (t < 1) {
          window.requestAnimationFrame(tick);
        } else {
          el.textContent = `${prefix}${target}${suffix}`;
        }
      }

      window.requestAnimationFrame(tick);
    });

    barEls.forEach((bar) => {
      const w = bar.getAttribute("data-bar-width") || "100%";
      bar.style.width = play ? w : "0%";
    });
  }

  if (resultsSection && "IntersectionObserver" in window) {
    const resultsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          animateCounters(entry.isIntersecting);
        });
      },
      { threshold: 0.15 }
    );
    resultsObserver.observe(resultsSection);
  } else {
    animateCounters(true);
  }

  const scenarioBtns = document.querySelectorAll("[data-scenario-btn]");
  const scenTrad = document.getElementById("scen-trad");
  const scenFlr = document.getElementById("scen-flr");
  const scenSaving = document.getElementById("scen-saving");
  const scenDetail = document.getElementById("scen-detail");

  scenarioBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-scenario-btn");
      const data = DOWNTIME_SCENARIOS[key];
      if (!data) return;

      scenarioBtns.forEach((b) => {
        b.classList.remove("bg-[#FE5502]", "text-white", "border-[#FE5502]");
        b.classList.add("bg-white/5", "text-white/75", "border-white/15");
      });
      btn.classList.add("bg-[#FE5502]", "text-white", "border-[#FE5502]");
      btn.classList.remove("bg-white/5", "text-white/75", "border-white/15");

      if (scenTrad) scenTrad.textContent = data.tradHours;
      if (scenFlr) scenFlr.textContent = data.flrHours;
      if (scenSaving) scenSaving.textContent = data.savingPct;
      if (scenDetail) scenDetail.textContent = data.detail;
    });
  });

  // ==========================================================================
  // 5. SUBTLE SCROLL PARALLAX, STICKY HEADER & MOBILE FLOATING BAR
  // ==========================================================================
  const parallaxElements = document.querySelectorAll("[data-parallax]");
  const siteHeader = document.getElementById("site-header");
  const mobileFloatingBar = document.getElementById("mobile-floating-cta");
  let ticking = false;

  function onScrollFrame() {
    const vh = window.innerHeight;
    const scrollY = window.scrollY;

    // Header state
    if (siteHeader) {
      if (scrollY > 36) {
        siteHeader.classList.add(
          "bg-[#0A0A0A]/95",
          "backdrop-blur-md",
          "border-b",
          "border-white/10",
          "py-3.5",
          "sm:py-4"
        );
        siteHeader.classList.remove("py-5", "sm:py-7");
      } else {
        siteHeader.classList.remove(
          "bg-[#0A0A0A]/95",
          "backdrop-blur-md",
          "border-b",
          "border-white/10",
          "py-3.5",
          "sm:py-4"
        );
        siteHeader.classList.add("py-5", "sm:py-7");
      }
    }

    // Floating bottom emergency CTA on mobile after scrolling past Hero
    if (mobileFloatingBar) {
      if (scrollY > vh * 0.65) {
        mobileFloatingBar.classList.remove("translate-y-full", "opacity-0", "pointer-events-none");
        mobileFloatingBar.classList.add("translate-y-0", "opacity-100");
      } else {
        mobileFloatingBar.classList.add("translate-y-full", "opacity-0", "pointer-events-none");
        mobileFloatingBar.classList.remove("translate-y-0", "opacity-100");
      }
    }

    // Parallax on desktop
    if (window.innerWidth >= 768) {
      parallaxElements.forEach((el) => {
        const speed = parseFloat(el.getAttribute("data-parallax")) || 0.1;
        const rect = el.parentElement.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < vh) {
          const centerOffset = (rect.top + rect.height / 2 - vh / 2) / vh;
          const translateY = centerOffset * speed * 120;
          el.style.transform = `scale(1.06) translate3d(0, ${translateY.toFixed(1)}px, 0)`;
        }
      });
    }

    updateScrollTypewriter();
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(onScrollFrame);
        ticking = true;
      }
    },
    { passive: true }
  );
  onScrollFrame();

  // ==========================================================================
  // 6. TOUCH / CLICK ACCORDION FOR EDITORIAL HOVER COLUMNS (MOTORES & 360º)
  // ==========================================================================
  const editorialCols = document.querySelectorAll(".editorial-spec-col");
  editorialCols.forEach((col) => {
    col.addEventListener("click", (e) => {
      if (e.target.closest("a, [data-spec-trigger]")) return;
      const isExpanded = col.classList.toggle("is-expanded");
      const mobileHintText = col.querySelector(".mobile-tap-hint");
      if (mobileHintText) {
        mobileHintText.textContent = isExpanded
          ? "Ocultar serviços ↑"
          : "Toque para detalhar ↓";
      }
    });
  });

  // ==========================================================================
  // 7. MOBILE NAVIGATION DRAWER TOGGLE
  // ==========================================================================
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIconOpen = document.getElementById("menu-icon-open");
  const menuIconClose = document.getElementById("menu-icon-close");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  function setMobileMenuState(open) {
    if (!mobileMenuBtn || !mobileMenu) return;
    mobileMenuBtn.setAttribute("aria-expanded", String(open));
    mobileMenu.classList.toggle("hidden", !open);
    if (menuIconOpen && menuIconClose) {
      menuIconOpen.classList.toggle("hidden", open);
      menuIconClose.classList.toggle("hidden", !open);
    }
  }

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      const isExpanded = mobileMenuBtn.getAttribute("aria-expanded") === "true";
      setMobileMenuState(!isExpanded);
    });

    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => setMobileMenuState(false));
    });
  }

  // ==========================================================================
  // 8. TECHNICAL SPEC MODAL & LIGHTBOX CONTROLLERS
  // ==========================================================================
  const modal = document.getElementById("spec-modal");
  const modalCode = document.getElementById("modal-code");
  const modalTitle = document.getElementById("modal-title");
  const modalSubtitle = document.getElementById("modal-subtitle");
  const modalDesc = document.getElementById("modal-desc");
  const modalList = document.getElementById("modal-list");
  const modalCta = document.getElementById("modal-cta");
  const closeBtns = document.querySelectorAll("[data-close-modal]");

  function openSpecModal(key) {
    const data = TECHNICAL_SPECS[key];
    if (!data || !modal) return;

    modalCode.textContent = data.code;
    modalTitle.textContent = data.title;
    modalSubtitle.textContent = data.subtitle;
    modalDesc.textContent = data.description;
    modalList.innerHTML = data.items
      .map(
        (item) => `
        <li class="flex items-start gap-3 py-2.5 border-b border-[#DFDFDD] last:border-none text-sm md:text-base text-[#1A1A1A]">
          <span class="mt-1.5 w-2 h-2 bg-[#FE5502] shrink-0"></span>
          <span>${item}</span>
        </li>`
      )
      .join("");
    modalCta.href = buildWhatsAppUrl(data.whatsappText);

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeSpecModal() {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  document.querySelectorAll("[data-spec-trigger]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const key = btn.getAttribute("data-spec-trigger");
      openSpecModal(key);
    });
  });

  closeBtns.forEach((btn) => btn.addEventListener("click", closeSpecModal));

  const lightbox = document.getElementById("gallery-lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  document.addEventListener("click", (e) => {
    // Ignore click if user was swiping the carousel on touch device
    if (touchMovedDistance > 10) {
      touchMovedDistance = 0;
      return;
    }
    const item = e.target.closest("[data-gallery-item]");
    if (!item) return;
    const src = item.getAttribute("data-src");
    const caption = item.getAttribute("data-caption");
    if (!lightbox || !lightboxImg || !src) return;
    lightboxImg.src = src;
    lightboxImg.alt = caption || "Registro operacional F.L.R. Mecânica";
    if (lightboxCaption) lightboxCaption.textContent = caption || "";
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });

  document.querySelectorAll("[data-close-lightbox]").forEach((btn) => {
    btn.addEventListener("click", closeLightbox);
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeSpecModal();
      closeLightbox();
    }
  });

  // ==========================================================================
  // 9. QUICK FIELD DISPATCH FORM (WHATSAPP GENERATOR)
  // ==========================================================================
  const dispatchForm = document.getElementById("dispatch-form");
  if (dispatchForm) {
    dispatchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const equip =
        document.getElementById("dispatch-equip")?.value ||
        "Máquina / Caminhão Diesel";
      const mode =
        document.getElementById("dispatch-mode")?.value || "Socorro em Campo";
      const location =
        document.getElementById("dispatch-location")?.value?.trim() ||
        "Lençóis Paulista / Região";

      let text = `Olá, equipe F.L.R. Mecânica! Preciso de suporte técnico:\n\n`;
      text += `• *Modalidade:* ${mode}\n`;
      text += `• *Equipamento:* ${equip}\n`;
      text += `• *Localização:* ${location}\n`;

      window.open(buildWhatsAppUrl(text), "_blank", "noopener,noreferrer");
    });
  }
});
