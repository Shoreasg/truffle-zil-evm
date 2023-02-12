const ShoreaToken = artifacts.require("ShoreaToken");

contract("ShoreaToken", accounts =>
{
    it("should put 10000 ShoreaToken in the account", async () => {
        const ShoreaTokenInstance = await ShoreaToken.deployed();
        const balance = await ShoreaTokenInstance.balanceOf.call(accounts[0]);
    
        assert.equal(balance.valueOf(), 10000, "10000 tokens wasn't in the account");
      });
})