TweenMax.defaultEase = Linear.easeOut;

new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  navigation: true,
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const img = section.querySelectorAll(".box img");
    const tl = new TimelineMax({ delay: 0.5 });
    tl.fromTo(img, 0.5, { y: "50", opacity: 0 }, { y: "0", opacity: 1 });
    if (destination.index === 2) {
      const macs = document.querySelectorAll(".pc");
      const description = document.querySelector(".description");
      tl.fromTo(macs, 0.7, { x: "100%" }, { x: "-10%" })
        .fromTo(
          description,
          0.5,
          { opacity: 0, y: "50" },
          { y: "0", opacity: 1 }
        )
        .fromTo(macs[0], 1, { opacity: 1 }, { opacity: 1 })
        .fromTo(macs[1], 1, { opacity: 0 }, { opacity: 1 })
        .fromTo(macs[2], 1, { opacity: 0 }, { opacity: 1 });
    }
    if (destination.index === 3) {
        const states = document.querySelectorAll(".mm")
        tl.fromTo(states[0], 0.7, { opacity: 0 }, { opacity: 1 })
        .fromTo(states[1], 0.7, { opacity: 1 }, { opacity: 0 });
    }
    if (destination.index === 4) {
      const card = document.querySelector(".s5 .bg");
      tl.fromTo(card, 0.7, { width: "85vw", height: "75vh", margin: "auto" }, { width: "100vw", height: "100vh" });
    }
  }
});