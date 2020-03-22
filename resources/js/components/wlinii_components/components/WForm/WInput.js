import Vue from "vue";

Vue.component("w-input", {
  data: () => ({
    onFocus: false,
    errorMessage: null
  }),

  props: {
    value: [String, Number],
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: String,
    label: String,
    color: {
      type: String,
      default: "primary"
    },
    rules: Array
  },

  template: `
        <div class="input-container">
            <div class="input-group" :class="inputGroupClass" :style="inputGroupStyle" >
                <input
                    :value="value"
                    @input="$emit('input', $event.target.value)"
                    @focus="onFocus = true"
                    @blur="onFocus = false; validate()"
                    :disabled="disabled"
                    :placeholder="placeholder"
                    :class="inputClass"
                    
                />
                <label :style="labelStyle">{{ label }}</label>
            </div>
            <div class="error-input">{{ errorMessage }}</div>
        </div>
        
    `,

  computed: {
    inputGroupStyle() {
      if (this.errorMessage) {
        return `border: 2px solid ${this.$wlinii["error"]}`;
      } else {
        if (this.value || this.onFocus) {
          return this.setInputColor().group;
        }
        return "";
      }
    },

    labelStyle() {
      if (this.errorMessage) {
        return `color: ${this.$wlinii["error"]}`;
      } else {
        if (this.value || this.onFocus) {
          return this.setInputColor().label;
        }
        return "";
      }
    },

    inputGroupClass() {
      return this.disabled ? "disabled" : "";
    },

    inputClass() {
      let inputClass = "";
      this.value ? (inputClass += "active") : "";
      this.disabled ? (inputClass += " disabled") : "";
      return inputClass;
    }
  },

  methods: {
    setInputColor() {
      if (this.$wlinii[this.color]) {
        return {
          group: `border: 2px solid ${this.$wlinii[this.color]}`,
          label: `color: ${this.$wlinii[this.color]}`
        };
      } else {
        return {
          group: `border: 2px solid ${this.color}`,
          label: `color: ${this.color}`
        };
      }
    },

    validate() {
      if (this.rules) {
        for (let i = 0; i < this.rules.length; i++) {
          if (this.rules[i](this.value)) {
            this.errorMessage = this.rules[i](this.value);
            return;
          } else {
            this.errorMessage = null;
          }
        }
      }
    }
  }
});
