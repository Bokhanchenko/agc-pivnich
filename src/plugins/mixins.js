import $t from "../modules/core/servises/translations";

export default {
  data: () => ({
    isDev: process.env.NODE_ENV === "development"
  }),

  methods: {
    $t
  }
};
