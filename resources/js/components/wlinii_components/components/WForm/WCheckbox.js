import Vue from "vue";

Vue.component("w-checkbox", {
  data: () => ({
    errorMessage: null
  }),

  props: {
    value: Boolean,
    disabled: {
      type: Boolean,
      default: false
    },
    label: String,
    color: {
      type: String,
      default: "primary"
    }
  },

  template: `
            <div class="checkbox-group">
                <input
                    :checked="value" 
                    @input="$emit('input', $event.target.checked)"
                    :id="randomId" 
                    type="checkbox"
                    :disabled="disabled"
                    :class="setInputColor" 
                />
                <label :for="randomId" >{{ label }}</label>
            </div>
    `,

  computed: {
    randomId() {
      let result = "";
      let characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (var i = 0; i < 8; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }
      return result;
    },

    setInputColor() {
      if (this.$wlinii[this.color]) {
        if (this.disabled) {
          return "";
        }
        return `checkbox-${this.color}`;
      }
      return "checkbox-primary";
    }
  }
});
