export const TeleporterMessageInput = `TeleporterMessageInput({
    destinationBlockchainID: destinationBlockchainID,
  destinationAddress: destinationAddress,
  feeInfo: TeleporterFeeInfo({
      feeTokenAddress: address(0),
    amount: 0
  }),
  requiredGasLimit: 100000,
  allowedRelayerAddresses: new address[](0),
  message: message
})`;

export const SenderOnCChainWithRegistry = `// SPDX-License-Identifier: Ecosystem

pragma solidity 0.8.18;

import "https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/upgrades/TeleporterRegistry.sol";
import "https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/ITeleporterMessenger.sol";

contract SenderOnCChainWithRegistry {
    // The Teleporter registry contract manages different Teleporter contract versions.
    TeleporterRegistry public immutable teleporterRegistry;

    constructor(address teleporterRegistryAddress) {
        require(
            teleporterRegistryAddress != address(0),
            "SenderOnCChain: zero teleporter registry address"
        );

        teleporterRegistry = TeleporterRegistry(teleporterRegistryAddress);
    }

    function sendMessage(address destinationAddress, string calldata message)
        external
    {
        ITeleporterMessenger teleporterMessenger = teleporterRegistry
            .getLatestTeleporter();

        teleporterMessenger.sendCrossChainMessage(
            TeleporterMessageInput({
                destinationBlockchainID: 0x9f3be606497285d0ffbb5ac9ba24aa60346a9b1812479ed66cb329f394a4b1c7,
                destinationAddress: destinationAddress,
                feeInfo: TeleporterFeeInfo({
                    feeTokenAddress: address(0),
                    amount: 0
                }),
                requiredGasLimit: 100000,
                allowedRelayerAddresses: new address[](0),
                message: abi.encode(message)
            })
        );
    }
}
`;

export const ReceiverOnDispatchWithRegistry = `// SPDX-License-Identifier: Ecosystem

pragma solidity 0.8.18;

import "https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/upgrades/TeleporterRegistry.sol";
import "https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/ITeleporterMessenger.sol";
import "https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/ITeleporterReceiver.sol";

contract ReceiverOnDispatchWithRegistry is ITeleporterReceiver {

    // The Teleporter registry contract manages different Teleporter contract versions.
    TeleporterRegistry public immutable teleporterRegistry;
    bytes32 public myOriginChainID;
    address public myOriginSenderAddress;

      constructor(address teleporterRegistryAddress) {
        require(
            teleporterRegistryAddress != address(0),
            "SenderOnCChain: zero teleporter registry address"
        );

        teleporterRegistry = TeleporterRegistry(teleporterRegistryAddress);
    }

    string public lastMessage;

    function receiveTeleporterMessage(
        bytes32 originChainID,
        address originSenderAddress,
        bytes calldata message
    ) external {
        myOriginChainID = originChainID;
        myOriginSenderAddress = originSenderAddress;
        // Only the Teleporter receiver can deliver a message. Function throws an error if
        // msg.sender is not registered
        teleporterRegistry.getVersionFromAddress(msg.sender);

        // Store the message.
        lastMessage = abi.decode(message, (string));
    }
}`;
