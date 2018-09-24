var checkRequest = require("./checkRequest");

describe("checkRequest function", () => {
  test("checkRequest returns data without cc", () => {
    req = {
      body: {
        from: 'bob',
        to: 'christopherforrest92@gmail.com',
        subject: 'example',
        text: 'somthing',
        bcc: "",
        cc: ""
      }
    };

    expect(checkRequest(req)).toEqual({
        from: 'bob@freeemailerservice.com',
        to: 'christopherforrest92@gmail.com',
        subject: 'example',
        text: 'somthing'});
  });

  test("checkRequest removes field if undefined", () => {
    req = {
      body: {
        from: 'bob',
        to: 'christopherforrest92@gmail.com',
        subject: 'example',
        text: 'somthing',
        bcc: undefined,
        cc: undefined
      }
    };

    expect(checkRequest(req)).toEqual({
        from: 'bob@freeemailerservice.com',
        to: 'christopherforrest92@gmail.com',
        subject: 'example',
        text: 'somthing'});
  });

});
