// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

interface IUniswapV2Factory {
    event SetFeeTo(address _feeTo);
    event SetFeeToSetter(address _feeToSetter);

    event PairCreated(address indexed token0, address indexed token1, address pair, uint);

    function feeTo() external view returns (address);
    function feeToSetter() external view returns (address);

    function getPair(address tokenA, address tokenB) external view returns (address pair);
    function allPairs() external view returns (uint);
    function allPairsLength() external view returns (uint);

    function createPair(address tokenA, address tokenB) external returns (address pair);

    function setFeeTo(address) external;
    function setFeeToSetter(address) external;
}
