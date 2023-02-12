// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ShoreaToken is ERC20 
{
        constructor(uint256 initialSupply) ERC20("ShoreaToken", "ST") 
        {
        _mint(msg.sender, initialSupply);
    }
}