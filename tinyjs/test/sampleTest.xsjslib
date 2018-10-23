describe("sample test suite", function() {

	beforeEach(function() {});

	it("not ok", function() {
		expect(0).toBe(1);
	});

	it("ok", function() {
		expect(0).toBe(0);
	});
});