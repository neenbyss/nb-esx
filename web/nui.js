const app = Vue.createApp({
  data() {
    return {
      vector3: "",
      vector4: "",
      coords: false,
      coords2: "",
      clip: "",
    };
  },
  destroyed() {
    window.removeEventListener("message", this.listener);
  },
  mounted() {
    this.listener = window.addEventListener("message", (event) => {
      let action = event.data.action;
      let data = event.data;
      switch (action) {
        case "CLIP_COORDS":
          this.clip = data.data;
          this.copyToClipboard(data.data);
          break;
        case "NUI_COORDS":
          this.vector3 = data.data.vector3Message
          this.vector4 = data.data.vector4Message
          this.coords = data.data.coordsMessage
          this.coords2 = data.data.coords2Message
          break;
      }
    });
  },
  methods: {
    copyToClipboard(element, isThis) {
      let copyText = isThis ? this[element] : element;
      const el = document.createElement("textarea");
      el.value = copyText;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      this.nui("notify", { message: "Copiado" });
    },
    nui(callback, data = {}) {
      fetch(`https://${GetParentResourceName()}/${callback}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    },
  },
});
app.mount("#app");
