//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFTMarketPlace is ERC721URIStorage {

	address payable owner;
	using Counters for Counters.Counter;
	Counters.Counter private _tokenIds;
	Counters.Counter private _itemsSold;
	uint256 listPrice = 0.01 ether;

	constructor() ERC721("NFTMarketPlace", "PLSM") {
		owner = payable(msg.sender);

	}

	struct listedTokenMetaData {
		address payable owner;
		address payable seller;
		uint256 price;
		uint256 _tokenId;
		bool _currentlyListed;
	}

	event TokenListedSuccess (
        uint256 indexed _tokenId,
        address owner,
        address seller,
        uint256 price,
        bool _currentlyListed
    );

	mapping(uint256 => listedTokenMetaData) private idToListedTokenMetaData;

	function updateListPrice(uint256 _listPrice) public payable {
		require(owner == msg.sender, "Only Owner can update Listing Price!");
		listPrice = _listPrice;
	}

	// Get Helper Functions 

	function getListPriceForNft() public view returns (uint256) {
		return listPrice;
	}


	function getMyNFTs() public view returns (listedTokenMetaData[] memory) {
        uint totalItemCount = _tokenIds.current();
        uint itemCount = 0;
        uint currentIndex = 0;
        
        for(uint i=0; i < totalItemCount; i++)
        {
            if(idToListedTokenMetaData[i+1].owner == msg.sender || idToListedTokenMetaData[i+1].seller == msg.sender){
                itemCount += 1;
            }
        }

        listedTokenMetaData[] memory items = new listedTokenMetaData[](itemCount);
        for(uint i=0; i < totalItemCount; i++) {
            if(idToListedTokenMetaData[i+1].owner == msg.sender || idToListedTokenMetaData[i+1].seller == msg.sender) {
                uint currentId = i+1;
                listedTokenMetaData storage currentItem = idToListedTokenMetaData[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }


	function getAllNFTs() public view returns (listedTokenMetaData[] memory) {
		uint256 count = _tokenIds.current();
		listedTokenMetaData[] memory tokens = new listedTokenMetaData[](count);
		
		uint256 curr_idx = 0;

		for (uint256 i = 0; i < count; i++) 
		{
			
			uint currentTknId = i + 1;
			listedTokenMetaData storage currentItem = idToListedTokenMetaData[currentTknId];
            tokens[curr_idx] = currentItem;
            curr_idx += 1;

		}
		return tokens;
	}

	// NB: storage: permanent storage, costly   memory: temporary storage and less costly 
	function getLatestTokenMetadata() public view returns (listedTokenMetaData memory) {
		uint256 latestTokenId = _tokenIds.current();
		return idToListedTokenMetaData[latestTokenId];
	}

	function getlistedTokenMetadata(uint256 _TokenId) public view returns (listedTokenMetaData memory) {
		return idToListedTokenMetaData[_TokenId];
	}

	function getCurrentTokenId() public view returns (uint256) {
		return _tokenIds.current();
	}

	// Functions: createToken, createListedToken, getAllNFTs, getMyNFTs, executeSale	
	function createToken(string memory tokenURI, uint256 _price) public payable returns (uint256){
		require(msg.value == listPrice, "Not enough ether to create Token");
		require(_price > 0, "Not enough ether to create Token");
		
		_tokenIds.increment();
		uint256 _latestTokenId = _tokenIds.current();
		_safeMint(msg.sender, _latestTokenId);
		_setTokenURI(_latestTokenId, tokenURI);

		setToListedToken(_latestTokenId, _price);

		return _latestTokenId;
	}

	function setToListedToken(uint256 _latestTokenId, uint256 _price) private {
		idToListedTokenMetaData[_latestTokenId] = listedTokenMetaData(
			payable(address(this)),
			payable(msg.sender),
			_price,
			_latestTokenId,
			true
		);
		_transfer(msg.sender, address(this), _latestTokenId);

		emit TokenListedSuccess(
            _latestTokenId,
            address(this),
            msg.sender,
            _price,
            true
        );
	}


	function SellNft(uint256 tokenId) public payable {
		uint256 price = idToListedTokenMetaData[tokenId].price;
		require(msg.value == price, "Not enough ether to purchase NFT");
		address seller = idToListedTokenMetaData[tokenId].seller;
		idToListedTokenMetaData[tokenId]._currentlyListed = true;
        idToListedTokenMetaData[tokenId].seller = payable(msg.sender);
        _itemsSold.increment();

		_transfer(address(this), msg.sender, tokenId);
		approve(address(this), tokenId);

		payable(owner).transfer(listPrice);

		payable(seller).transfer(msg.value);
	}

}	
