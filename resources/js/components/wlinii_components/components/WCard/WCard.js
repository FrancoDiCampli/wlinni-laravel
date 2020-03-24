import Vue from "vue";

Vue.component("w-card", {
  data: () => ({
    stateStyle: ""
  }),

  props: {
    value: Boolean,
    image: String,
    imageHeight: {
      type: String,
      default: "225px"
    },
    hover: String,
    state: {
      type: String,
      default: "rounded"
    }
  },

  template: `
        <div :class="cardClass" :style="cardStyle" @click="$emit('change', value)">
            <div v-if="value" class="card-selector">
                <div class="check-circle">
                    <div class="checkmarck"></div>
                </div>
            </div>
            <div class="card-info" v-if="$slots.header">
                <slot name="header"></slot>
            </div>
            <div class="image" :style="cardImageStyle" v-if="image">
                <div class="card-image-content">
                    <slot name="image"></slot>
                </div>
            </div>
            
            <div :class="'card-state ' + state" ref="stateRef" :style="stateStyle" v-if="$slots.state">
                <slot name="state"></slot>
            </div>

            <div class="card-text" v-if="$slots.default">
                <slot></slot>
            </div>
            <div class="card-info" v-if="$slots.footer">
                <slot name="footer"></slot>
            </div>
        </div>
    `,

  computed: {
    cardClass() {
      return this.value ? "card" : `card ${this.hover}`;
    },

    cardStyle() {
      return this.image ? `background-image: url(${this.image});` : "";
    },

    cardImageStyle() {
      return this.image
        ? `background-image: url(${this.image}); height: ${this.imageHeight};`
        : "";
    }
  },

  mounted() {
    this.setStateStyle();
  },

  methods: {
    setStateStyle() {
      if (this.$refs.stateRef) {
        let elementHeight = this.$refs.stateRef.clientHeight;
        this.stateStyle = `margin-top: -${Number(
          elementHeight / 2
        ).toFixed()}px;`;
      }
    }
  }
});
