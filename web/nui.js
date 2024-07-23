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
const SvgClipboard = {
  props: {
    className: {
      type: String,
      default: ''
    }
  },
  template: `<svg xmlns="http://www.w3.org/2000/svg" :class="className" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" data-icon="SvgClipboard" aria-hidden="true" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;"><path d="M15.9 6.1a1.038 1.038 0 01-.65-.213.972.972 0 01-.35-.587A3 3 0 0012 3a3.031 3.031 0 00-1.862.65A2.886 2.886 0 009.1 5.2a.972.972 0 01-.35.587A1.038 1.038 0 018.1 6H6.7a.976.976 0 00-.725.313A1.017 1.017 0 005.7 7v13a.976.976 0 00.313.725A1.017 1.017 0 006.7 21h10.6a.979.979 0 00.725-.312A1.021 1.021 0 0018.3 20V7.1a.976.976 0 00-.313-.725A1.017 1.017 0 0017.3 6.1h-1.4zM12 6.05V6h0m-2.6 5.8V17h5.2"></path></svg>`
}

app.component('svg-clipboard', SvgClipboard);
app.mount("#app");
