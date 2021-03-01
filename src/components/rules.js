const rules = {
  MANAGER: {
    static: ["users:list", "users:create", "users:detail"]
  },
  STAFF: {
    static: ["users:list"]
  }
};

export default rules;
