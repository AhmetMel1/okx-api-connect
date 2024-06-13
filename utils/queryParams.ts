export class QueryParamBuilder<T> {
  params: T;
  constructor(params: T) {
    this.params = params;
  }
  build() {
    if (this.params === null || this.params === undefined) return "";

    const val = JSON.parse(JSON.stringify(this.params));

    let query = "";

    for (const [key, value] of Object.entries(val)) {
      const valueOf = value !== null ? String(value) : "";

      if (valueOf.trim() !== "") {
        if (query === "") query += "?";
        if (query.length > 1) query += "&";

        query += `${key}=${encodeURIComponent(valueOf)}`;
      }
    }

    return query;
  }
}
