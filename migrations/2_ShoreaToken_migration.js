const ShoreaToken = artifacts.require("ShoreaToken");

module.exports = function (deployer)
{
    deployer.deploy(ShoreaToken, 10000)
}