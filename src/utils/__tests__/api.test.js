import Api from "./../api";
import searchData from "./__data__/search.json";
import fetchMock from "fetch-mock";
import qs from "querystring";

const getSearchParams = url => {
  const split = url.split("?");
  return qs.parse(split[1]);
};

describe("Api tests suite", () => {
  it("Doit retourner les livres", () => {
    const query = "lord of rings";

    fetchMock.get("*", url => {
      expect(url.indexOf(query) >= 0).toEqual(true);

      return searchData;
    });

    return Api.searchBooks({ query }).then(source => {
      expect(source).toHaveLength(85); //Après avoir filtrer les mauvais livre
      fetchMock.restore();
    });
  });

  it("Doit faire une pagination avec une limite", () => {
    const query = "lord of rings";
    const page = "2";
    const limit = "10";

    fetchMock.get("*", url => {
      const params = getSearchParams(url);
      expect(params.q).toEqual(query);
      expect(params.limit).toEqual(limit);
      expect(params.page).toEqual(page);

      return searchData;
    });

    return Api.searchBooks({ query, page, limit }).then(source => {
      fetchMock.restore();
    });
  });

  it("Doit retourner une erreur", () => {
    fetchMock.get("*", { body: { message: "Error" }, status: 400 });

    return Api.searchBooks({ query: "query" }).catch(error => {
      expect(error.message).toEqual("Error");
    });
  });
});
