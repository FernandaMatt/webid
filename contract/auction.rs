use anchor_lang::prelude::*;

declare_id!("A9xw81RLzRdq8XX6rnu68KkyeDxn99L6QdWgtU92UQ2P");

#[program]
pub mod anchor_auction {
    use super::*;


pub fn create_auction(
    ctx: Context<CreateAuction>,
     asset_token: String,
     asset_percentage: u16,
     time_until_repurchase: u32,
     rent_cost: u16,
     max_rate: u16,
     price: u16,
     duration_of_auction: u32,
     description_asset: String
) -> Result<()> {
    
    
    msg!("Auction created");
    msg!("asset_token: {}", asset_token);
    msg!("asset_percentage: {}", asset_percentage);
    msg!("time_until_repurchase: {}", time_until_repurchase);
    msg!("rent_cost: {}", rent_cost);
    msg!("max_rate: {}", max_rate);
    msg!("price: {}", price);
    msg!("duration of auction: {}", duration_of_auction);
    msg!("description_asset: {}", description_asset);
    msg!("Auction created");

    let auction_account = &mut ctx.accounts.auction_account;
    auction_account.pub_key_auction_owner = ctx.accounts.initializer.key();
    auction_account.asset_token = asset_token;
    auction_account.asset_percentage = asset_percentage;
    auction_account.time_until_repurchase = time_until_repurchase;
    auction_account.rent_cost = rent_cost;
    auction_account.max_rate = max_rate;
    auction_account.price = price;
    auction_account.duration_of_auction = duration_of_auction;
    auction_account.description_asset = description_asset;
    auction_account.highest_bid = 0;
    auction_account.pub_key_winner = ctx.accounts.initializer.key();
    Ok(())
}


pub fn update_highest_bid(
    ctx: Context<UpdateHighestBid>,
    highest_bid: u16, 
    pub_key_winner: Pubkey,
    
) -> Result<()> {
    
    
    msg!("highest bid update");
    msg!("Highest bid: {}", highest_bid);
    msg!("Address winner: {}", pub_key_winner);
    

    let auction_account = &mut ctx.accounts.auction_account;
    auction_account.pub_key_auction_owner = ctx.accounts.initializer.key();
    auction_account.highest_bid = highest_bid;
    auction_account.pub_key_winner = pub_key_winner;
   
    Ok(())
}


#[derive(Accounts)]
#[instruction(asset_token: String, description_asset: String)]
pub struct CreateAuction<'info> {
    #[account(
        init,
        seeds=[asset_token.as_bytes(), initializer.key().as_ref()],
        bump,
        payer = initializer,
        space = 8 + 50 + 1 + 4 + asset_token.len() + 4 + description_asset.len()
    )]
    pub auction_account: Account<'info, AuctionAccountState>,
    #[account(mut)]
    pub initializer: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction(asset_token: String, description_asset: String)]
pub struct UpdateHighestBid<'info> {
    #[account(
        init,
        seeds=[asset_token.as_bytes(), initializer.key().as_ref()],
        bump,
        payer = initializer,
        space = 8 + 50 + 1 + 4 + asset_token.len() + 4 + description_asset.len()
    )]
    pub auction_account: Account<'info, AuctionAccountState>,
    #[account(mut)]
    pub initializer: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct AuctionAccountState {
    pub pub_key_winner: Pubkey,
    pub pub_key_auction_owner: Pubkey,
    pub highest_bid: u16,
    pub asset_token: String,
    pub asset_percentage: u16,
    pub time_until_repurchase: u32,
    pub rent_cost: u16,
    pub max_rate: u16,
    pub price: u16,
    pub duration_of_auction: u32,
    pub description_asset: String
}


}