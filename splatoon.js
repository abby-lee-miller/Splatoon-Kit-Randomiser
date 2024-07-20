var splatoon = {
	modes:[
		'Turf War',
		'Splat Zones',
		'Tower Control',
		'Rainmaker',
		'Clam Blitz'],
	stages:[
		'Barnacle & Dime',
		'Bluefin Depot',
		'Brinewater Springs',
		'Crableg Capital',
		'Eeltail Alley',
		'Flounder Heights',
		'Hagglefish Market',
		'Hammerhead Bridge',
		'Humpback Pump Track',
		'Inkblot Art Academy',
		'Lemuria Hub',
		'Mahi-Mahi Resort',
		'MakoMart',
		'Manta Maria',
		'Marlin Airport',
		'Mincemeat Metalworks',
		'Museum d\'Alfonsino'
		'Robo ROM-en',
		'Scorch Gorge',
		'Shipshape Cargo Co.',
		'Sturgeon Shipyard',
		'Um\'ami Ruins'
		'Undertow Spillway'
		'Wahoo World'
	weapons:[
		{name:'Splattershot Jr.', subWeapon:'Splat Bomb', specialWeapon:'Bubbler'},
		{name:'Splattershot', subWeapon:'Burst Bomb', specialWeapon:'Bomb Rush'},
		{name:'Custom Splattershot Jr.', subWeapon:'Disruptor', specialWeapon:'Echolocator'},
		{name:'Splat Roller', subWeapon:'Suction Bomb', specialWeapon:'Killer Wail'},
		{name:'Splat Charger', subWeapon:'Splat Bomb', specialWeapon:'Bomb Rush'},
		{name:'Hero Shot Replica', subWeapon:'Burst Bomb', specialWeapon:'Bomb Rush'},
		{name:'Hero Roller Replica', subWeapon:'Suction Bomb', specialWeapon:'Killer Wail'},
		{name:'Hero Charger Replica', subWeapon:'Splat Bomb', specialWeapon:'Bomb Rush'},
		{name:'Tentatek Splattershot', subWeapon:'Suction Bomb', specialWeapon:'Inkzooka'},
		{name:'Kelp Splat Charger', subWeapon:'Sprinkler', specialWeapon:'Killer Wail'},
		{name:'.52 Gal', subWeapon:'Splash Wall', specialWeapon:'Killer Wail'},
		{name:'N-ZAP \'85', subWeapon:'Splat Bomb', specialWeapon:'Echolocator'},
		{name:'Slosher', subWeapon:'Burst Bomb', specialWeapon:'Inkstrike'},
		{name:'Classic Squiffer', subWeapon:'Point Sensor', specialWeapon:'Bubbler'},
		{name:'Heavy Splatling', subWeapon:'Splash Wall', specialWeapon:'Inkstrike'},
		{name:'Krak-On Splat Roller', subWeapon:'Squid Beakon', specialWeapon:'Kraken'},
		{name:'Aerospray MG', subWeapon:'Seeker', specialWeapon:'Inkzooka'},
		{name:'Splash-o-matic', subWeapon:'Suction Bomb', specialWeapon:'Bomb Rush'},
		{name:'Jet Squelcher', subWeapon:'Splash Wall', specialWeapon:'Inkstrike'},
		{name:'Inkbrush', subWeapon:'Sprinkler', specialWeapon:'Inkstrike'},
		{name:'N-ZAP \'89', subWeapon:'Sprinkler', specialWeapon:'Inkstrike'},
		{name:'Mini Splatling', subWeapon:'Suction Bomb', specialWeapon:'Inkzooka'},
		{name:'Blaster', subWeapon:'Disruptor', specialWeapon:'Killer Wail'},
		{name:'L-3 Nozzlenose', subWeapon:'Disruptor', specialWeapon:'Killer Wail'},
		{name:'Neo Splash-o-matic', subWeapon:'Burst Bomb', specialWeapon:'Inkzooka'},
		{name:'Tri-Slosher', subWeapon:'Disruptor', specialWeapon:'Bubbler'},
		{name:'Heavy Splatling Deco', subWeapon:'Point Sensor', specialWeapon:'Kraken'},
		{name:'Splattershot Pro', subWeapon:'Splat Bomb', specialWeapon:'Inkstrike'},
		{name:'Carbon Roller', subWeapon:'Burst Bomb', specialWeapon:'Inkzooka'},
		{name:'H-3 Nozzlenose', subWeapon:'Suction Bomb', specialWeapon:'Echolocator'},
		{name:'Slosher Deco', subWeapon:'Splash Wall', specialWeapon:'Kraken'},
		{name:'.52 Gal Deco', subWeapon:'Seeker', specialWeapon:'Inkstrike'},
		{name:'New Squiffer', subWeapon:'Ink Mine', specialWeapon:'Inkzooka'},
		{name:'Inkbrush Nouveau', subWeapon:'Ink Mine', specialWeapon:'Bubbler'},
		{name:'Luna Blaster', subWeapon:'Ink Mine', specialWeapon:'Inkzooka'},
		{name:'Hydra Splatling', subWeapon:'Splat Bomb', specialWeapon:'Echolocator'},
		{name:'.96 Gal', subWeapon:'Sprinkler', specialWeapon:'Echolocator'},
		{name:'Octobrush', subWeapon:'Squid Beakon', specialWeapon:'Kraken'},
		{name:'Sploosh-o-matic', subWeapon:'Squid Beakon', specialWeapon:'Killer Wail'},
		{name:'Sloshing Machine', subWeapon:'Splat Bomb', specialWeapon:'Bomb Rush'},
		{name:'Splatterscope', subWeapon:'Splat Bomb', specialWeapon:'Bomb Rush'},
		{name:'Aerospray RG', subWeapon:'Ink Mine', specialWeapon:'Inkstrike'},
		{name:'L-3 Nozzlenose D', subWeapon:'Burst Bomb', specialWeapon:'Kraken'},
		{name:'Carbon Roller Deco', subWeapon:'Seeker', specialWeapon:'Bomb Rush'},
		{name:'Zink Mini Splatling', subWeapon:'Disruptor', specialWeapon:'Bubbler'},
		{name:'Rapid Blaster', subWeapon:'Ink Mine', specialWeapon:'Bubbler'},
		{name:'.96 Gal Deco', subWeapon:'Splash Wall', specialWeapon:'Kraken'},
		{name:'Range Blaster', subWeapon:'Splash Wall', specialWeapon:'Inkstrike'},
		{name:'H-3 Nozzlenose D', subWeapon:'Point Sensor', specialWeapon:'Inkzooka'},
		{name:'Custom Jet Squelcher', subWeapon:'Burst Bomb', specialWeapon:'Kraken'},
		{name:'Dynamo Roller', subWeapon:'Sprinkler', specialWeapon:'Echolocator'},
		{name:'Bamboozler 14 Mk I', subWeapon:'Splash Wall', specialWeapon:'Killer Wail'},
		{name:'Luna Blaster Neo', subWeapon:'Splat Bomb', specialWeapon:'Bomb Rush'},
		{name:'Tri-Slosher Nouveau', subWeapon:'Seeker', specialWeapon:'Echolocator'},
		{name:'Dual Squelcher', subWeapon:'Splat Bomb', specialWeapon:'Echolocator'},
		{name:'Rapid Blaster Pro', subWeapon:'Seeker', specialWeapon:'Inkzooka'},
		{name:'Octobrush Nouveau', subWeapon:'Splat Bomb', specialWeapon:'Inkzooka'},
		{name:'Custom Blaster', subWeapon:'Point Sensor', specialWeapon:'Bubbler'},
		{name:'Kelp Splatterscope', subWeapon:'Sprinkler', specialWeapon:'Killer Wail'},
		{name:'Custom Range Blaster', subWeapon:'Splat Bomb', specialWeapon:'Kraken'},
		{name:'Bamboozler 14 Mk II', subWeapon:'Disruptor', specialWeapon:'Echolocator'},
		{name:'E-Liter 3K', subWeapon:'Burst Bomb', specialWeapon:'Echolocator'},
		{name:'Custom Dual Squelcher', subWeapon:'Squid Beakon', specialWeapon:'Killer Wail'},
		{name:'Neo Sploosh-o-matic', subWeapon:'Point Sensor', specialWeapon:'Kraken'},
		{name:'Sloshing Machine Neo', subWeapon:'Point Sensor', specialWeapon:'Inkzooka'},
		{name:'Rapid Blaster Deco', subWeapon:'Suction Bomb', specialWeapon:'Bomb Rush'},
		{name:'Custom E-Liter 3K', subWeapon:'Squid Beakon', specialWeapon:'Kraken'},
		{name:'E-Liter 3K Scope', subWeapon:'Burst Bomb', specialWeapon:'Echolocator'},
		{name:'Forge Splattershot Pro', subWeapon:'Point Sensor', specialWeapon:'Inkzooka'},
		{name:'Gold Dynamo Roller', subWeapon:'Splat Bomb', specialWeapon:'Inkstrike'},
		{name:'Custom E-Liter 3K Scope', subWeapon:'Squid Beakon', specialWeapon:'Kraken'},
		{name:'Rapid Blaster Pro Deco', subWeapon:'Disruptor', specialWeapon:'Killer Wail'},
		{name:'Custom Hydra Splatling', subWeapon:'Sprinkler', specialWeapon:'Bubbler'},
		{name:'Wasabi Splattershot', subWeapon:'Splat Bomb', specialWeapon:'Inkstrike'},
		{name:'Berry Splattershot Pro', subWeapon:'Suction Bomb', specialWeapon:'Bomb Rush'},
		{name:'Tempered Dynamo Roller', subWeapon:'Seeker', specialWeapon:'Killer Wail'},
		{name:'Permanent Inkbrush', subWeapon:'Splat Bomb', specialWeapon:'Kraken'},
		{name:'Soda Slosher', subWeapon:'Splat Bomb', specialWeapon:'Inkzooka'},
		{name:'Fresh Squiffer', subWeapon:'Suction Bomb', specialWeapon:'Kraken'},
		{name:'Bamboozler 14 Mk III', subWeapon:'Burst Bomb', specialWeapon:'Inkstrike'},
		{name:'Refurbished Mini Splatling', subWeapon:'Burst Bomb', specialWeapon:'Bomb Rush'},
		{name:'Sploosh-o-matic 7', subWeapon:'Splat Bomb', specialWeapon:'Inkzooka'},
		{name:'Aerospray PG', subWeapon:'Burst Bomb', specialWeapon:'Kraken'},
		{name:'N-ZAP \'83', subWeapon:'Point Sensor', specialWeapon:'Kraken'},
		{name:'Grim Range Blaster', subWeapon:'Burst Bomb', specialWeapon:'Killer Wail'},
		{name:'Cherry H-3 Nozzlenose', subWeapon:'Splash Wall', specialWeapon:'Bubbler'},
		{name:'CoroCoro Splat Roller', subWeapon:'Splash Wall', specialWeapon:'Inkzooka'},
		{name:'Bento Splat Charger', subWeapon:'Splash Wall', specialWeapon:'Echolocator'},
		{name:'Bento Splatterscope', subWeapon:'Splash Wall', specialWeapon:'Echolocator'},
		{name:'Heavy Splatling Remix', subWeapon:'Sprinkler', specialWeapon:'Killer Wail'},
		{name:'Octoshot Replica', subWeapon:'Suction Bomb', specialWeapon:'Inkzooka'}],
	gear: {
		headgear: [
			{name:'18K Aviators', mainAbility:'Last-Ditch Effort'},
  			{name: 'Air Gills DX', mainAbility:'Tenacity'},
 			{name: 'Annaki Charms', mainAbility:'Swim Speed Up'},
  			{name: 'Annaki Mask', mainAbility: 'Opening Gambit'},
  			{name: 'Bamboo Hat', mainAbility: 'Ink Saver (Main)'},
 			{name: 'Beachcomber', mainAbility: 'Opening Gambit'},
			{name: 'BlobMob Mask', mainAbility:'Tenacity'},
			{name: 'Bream-Brim Cap'},
			{name: 'Bucket Hat', mainAbility:'Special Saver'},
			{name: 'Cephalo Pods', mainAbility: 'Ink Recovery Up'},
			{name: 'Classic Bowler', mainAbility: 'Run Speed Up'},
			{name: 'Classic Straw Boater', mainAbility: 'Special Power Up'},
			{name: 'Designer Headphones', mainAbility: 'Ink Saver (Sub)'},
			{name: 'Double Egg Shades', mainAbility:'Last-Ditch Effort'},
			{name: 'Face Visor', mainAbility:'Sub Resistance Up'},
			{name: 'Firefin Facemask', mainAbility: 'Run Speed Up'},
			{name: 'FishFry Biscuit Bandana', mainAbility: 'Special Power Up'},
			{name: 'FishFry Visor', mainAbility: 'Special Charge Up'},
  			{name: 'Forge Mask', mainAbility: 'Intensify Action'},
			{name: 'Full-Moon Glasses', mainAbility: 'Quick Super Jump'},
  			{name: 'Glassless Glasses', mainAbility: 'Quick Respawn'},
			{name: 'Half-Rim Glasses', mainAbility: 'Special Power Up'},
			{name: 'Hero Mindset Replica', mainAbility: 'Sub Power Up'},
			{name: 'Hickory Work Cap', mainAbility: 'Special Power Up'},
			{name: 'Hockey Helmet', mainAbility: 'Intensify Action'},
  Home-Team Catcher
  Howdy Hat
  Ink-Black Flap Cap
  Ink-Tinted Goggles
  Invisifloats
  Jean Dream Bucket
  Knitted Hat
  Moto Shades
  Ocho OctoPhones
  Party Hard Hat
  Pilot Goggles
  Retro BluFocals
  Retro Framers
  Splash Goggles
  Squidband
  Squidbeak Shield
  Squidlife Headphones
  Squidvader Cap
  Streetstyle Cap
  Studio Headphones
  Swim Goggles
  Takoroka Mesh
  Takoroka Visor
  Teddy Band
  Tennis Headband
  Tinted Shades
  Triple-Deck Specs
  Urchins Cap
  Wharfside Cap
  White Headband
  Winkle Stripe Helm
  Woolly Urchins Classic
  Annaki Beret
  Annaki Beret & Glasses
  Armor Helmet Replica
  Astro Helm
  Blowfish Bell Hat
  Boss Floss
  Brain Strainer
  Chaos Helm
  Five-Alarm Helmet
  Hero Headset Replica
  Hipster Horn-Rims
  House-Tag Denim Cap
  Jellyvader Cap
  Lightweight Cap
  Lo-Vis Visor
  MTB Helmet
  Ocho OctoPhones Blancos
  Octo Tackle Helmet Deco
  Octoking Facemask
  Painter's Mask
  Paisley Bandana
  Power Mask Mk I
  Retro Specs
  Samurai Helmet
  Scrum Cap
  Short Beanie
  Skate Helmet
  Skull Bandana
  Splash Goggles
  Squid Facemask
  Squid Hairclip
  Squid-Stitch Cap
  Stay Crusty Cap
  SV925 Circle Shades
  Tentaclinger Earring
  Toni Kensa Goggles
  Tulip Parasol
  Armor Helmet Replica
  Power Mask
  Enchanted Hat
  Cycling Cap
  Squinja Mask Mk II
  Squinja Mask Mk I
  Squid Clip-Ons
  Fresh Fish Head
  '360 All-Scopes'
  Pearlescent Crown S
  Pearlescent Crown L
  Marinated Headphones
  B-Ball Headband
  Cycle King Cap
  Z+F Flair Bowler
  Striped Beanie
  Treasure Hunter
  Jungle Hat
  Camping Hat
  Safari Hat
  Backward Cap
  Squash Headband
  Fake Contacts
  Gas Mask
  Visor Skate Helmet
  Dustcloud 'Phones
  Sporty Bobble Hat
  Octoglasses
  Soccer Headband
  Squid Nordic
  Dustcloud Cap
  Sun Visor
  Camo Mesh
  Straw Boater
  Two-Stripe Mesh
  Sea-Me-Nots
  Bike Helmet
  Stealth Goggles
  Paintball Mask
  Jet Cap
  Zekko Mesh
  Snorkel Mask
  Special-Forces Beret
  ZedFry Beanie
  Golf Visor
  Bobble Hat
  Black Arrowbands
  ZedFry Helmet
  Seafoam Cap
  White Arrowbands
  Seafoam 'Phones
  Five-Panel Cap
  Hat-Trick Bell Hat
  Deep Sinker Helm
  Jogging Headband
  Headlamp Helmet
  Commander Cap
  Barrelfish Home Helmet
  Do-Rag, Cap & Glasses
  Noise Cancelers
  Crust Bucket Visor
  Seashell Bamboo Hat
  'Cap\'n Cap'
  Stealth Squidbeak Shield
  Glam Clam Specs
  See-an-Enemy HUD
  Aux Boxes
  Retro Future Helmet
  Swim Cap
  Away-Team Catcher
  Urchin Understitch
  Headlamp Hat
  Undead Head
  The Plankton Walker
  Swim Reaper
  Bleak Beak
  Manta Mask
  Onaga Mask
  Hohojiro Mask
  3D Glasses
  Meetcha Mask
  Dust Blocker 2000
  Cap of Legend
  Clue-Detecting Cap
  Flounder Flap Cap
  Vintage Biker Cap
  Anglerfish Knit
  Dapperdasher Hat
  Octopearl Crown
  Golden Gala Masque
  Coral Wreath
  Slipstream Helmet
  Blowfish Newsie
  King Flip Mesh
  Sneaky Beanie
  Ink-Guard Goggles
  Tee Time Visor
  Barrelfish Baseball Hat
  Controller VM
  Mountie Hat
  Digi-Camo Forge Mask
  Matte Bike Helmet
  Yamagiri Beanie
  Black FishFry Bandana
  Long-Billed Cap
  Zekko Cap
  Barrelfish Headgear
  Slipstream Helmet Pro
  Squidfin Hook Cans
  Worker's Head Towel
  Order Regulator Replica
  Parallel Mask
  Pearl Plushie
  Order Earring Replica
		clothing: [
			{name:'Aloha Shirt', brand:'Forge', mainAbility:'Ink Recovery Up'},
			{name:'Anchor Sweat', brand:'SquidForce', mainAbility:'Cold Blooded'},
			{name:'Armor Jacket Replica', brand:'Cuttlegear', mainAbility:'Special Charge Up'},
			{name:'B-ball Jersey (Away)', brand:'Zink', mainAbility:'Ink Saver (Sub)'},
			{name:'B-ball Jersey (Home)', brand:'Zink', mainAbility:'Special Saver'},
			{name:'Baby-Jelly Shirt', brand:'Splash Mob', mainAbility:'Defense Up'},
			{name:'Baseball Jersey', brand:'Firefin', mainAbility:'Special Charge Up'},
			{name:'Basic Tee', brand:'SquidForce', mainAbility:'Quick Respawn'},
			{name:'Berry Ski Jacket', brand:'Inkline', mainAbility:'Special Duration Up'},
			{name:'Black 8-Bit FishFry', brand:'Firefin', mainAbility:'Defense Up'},
			{name:'Black Anchor Tee', brand:'SquidForce', mainAbility:'Recon'},
			{name:'Black Baseball LS', brand:'Rockenberg', mainAbility:'Swim Speed Up'},
			{name:'Black Inky Rider', brand:'Rockenberg', mainAbility:'Bomb Range Up'},
			{name:'Black Layered LS', brand:'SquidForce', mainAbility:'Ink Saver (Main)'},
			{name:'Black LS', brand:'Zekko', mainAbility:'Quick Super Jump'},
			{name:'Black Pipe Tee', brand:'KOG', mainAbility:'Special Saver'},
			{name:'Black Polo', brand:'Zekko', mainAbility:'Recon'},
			{name:'Black Squideye', brand:'Tentatek', mainAbility:'Run Speed Up'},
			{name:'Black Tee', brand:'SquidForce', mainAbility:'Special Duration Up'},
			{name:'Blue Peaks Tee', brand:'Inkline', mainAbility:'Ink Saver (Sub)'},
			{name:'Blue Sailor Suit', brand:'Forge', mainAbility:'Bomb Range Up'},
			{name:'Camo Layered LS', brand:'SquidForce', mainAbility:'Special Charge Up'},
			{name:'Camo Zip Hoodie', brand:'Firefin', mainAbility:'Quick Respawn'},
			{name:'Carnivore Tee', brand:'Firefin', mainAbility:'Defense Up'},
			{name:'Choco Layered LS', brand:'Takoroka', mainAbility:'Ink Saver (Sub)'},
			{name:'CoroCoro Hoodie', brand:'Zekko', mainAbility:'Cold Blooded'},
			{name:'Cycle King Jersey', brand:'Tentatek', mainAbility:'Defense Up'},
			{name:'Cycling Shirt', brand:'Zink', mainAbility:'Cold Blooded'},
			{name:'Dark Urban Vest', brand:'Firefin', mainAbility:'Cold Blooded'},
			{name:'FC Albacore', brand:'Takoroka', mainAbility:'Damage Up'},
			{name:'Firefin Navy Sweat', brand:'Firefin', mainAbility:'Bomb Range Up'},
			{name:'Forest Vest', brand:'Inkline', mainAbility:'Ink Recovery Up'},
			{name:'Forge Inkling Parka', brand:'Forge', mainAbility:'Run Speed Up'},
			{name:'Forge Octarian Jacket', brand:'Forge', mainAbility:'Haunt'},
			{name:'Fugu Tee', brand:'Firefin', mainAbility:'Swim Speed Up'},
			{name:'Grape Tee', brand:'Skalop', mainAbility:'Ink Recovery Up'},
			{name:'Gray College Sweat', brand:'Splash Mob', mainAbility:'Swim Speed Up'},
			{name:'Gray Mixed Shirt', brand:'Zekko', mainAbility:'Quick Super Jump'},
			{name:'Gray Vector Tee', brand:'Takoroka', mainAbility:'Quick Super Jump'},
			{name:'Green Cardigan', brand:'Splash Mob', mainAbility:'Recon'},
			{name:'Green Striped LS', brand:'Inkline', mainAbility:'Ninja Squid'},
			{name:'Green Tee', brand:'Forge', mainAbility:'Special Saver'},
			{name:'Green Zip Hoodie', brand:'Firefin', mainAbility:'Special Duration Up'},
			{name:'Green-Check Shirt', brand:'Zekko', mainAbility:'Bomb Range Up'},
			{name:'Herbivore Tee', brand:'Firefin', mainAbility:'Ninja Squid'},
			{name:'Hero Jacket Replica', brand:'Cuttlegear', mainAbility:'Swim Speed Up'},
			{name:'Ivory Peaks Tee', brand:'Inkline', mainAbility:'Haunt'},
			{name:'Krak-On 528', brand:'Krak-On', mainAbility:'Run Speed Up'},
			{name:'Layered Anchor LS', brand:'SquidForce', mainAbility:'Run Speed Up'},
			{name:'Layered Vector LS', brand:'Takoroka', mainAbility:'Special Saver'},
			{name:'Linen Shirt', brand:'Splash Mob', mainAbility:'Bomb Range Up'},
			{name:'Logo Aloha Shirt', brand:'Zekko', mainAbility:'Ink Recovery Up'},
			{name:'Lumberjack Shirt', brand:'Rockenberg', mainAbility:'Ink Saver (Main)'},
			{name:'Mint Tee', brand:'Skalop', mainAbility:'Defense Up'},
			{name:'Mountain Vest', brand:'Inkline', mainAbility:'Swim Speed Up'},
			{name:'Navy College Sweat', brand:'Splash Mob', mainAbility:'Damage Up'},
			{name:'Navy Striped LS', brand:'Splash Mob', mainAbility:'Damage Up'},
			{name:'Octo Tee', brand:'Cuttlegear', mainAbility:'Haunt'},
			{name:'Octoling Armor', brand:'Cuttlegear', mainAbility:'Ink Saver (Sub)'},
			{name:'Olive Ski Jacket', brand:'Inkline', mainAbility:'Recon'},
			{name:'Orange Cardigan', brand:'Splash Mob', mainAbility:'Special Charge Up'},
			{name:'Part-Time Pirate', brand:'Tentatek', mainAbility:'Damage Up'},
			{name:'Pearl Tee', brand:'Skalop', mainAbility:'Ink Saver (Sub)'},
			{name:'Pirate-Stripe Tee', brand:'Splash Mob', mainAbility:'Special Duration Up'},
			{name:'Power Armor', brand:'amiibo', mainAbility:'Quick Respawn'},
			{name:'Purple Camo LS', brand:'Takoroka', mainAbility:'Bomb Range Up'},
			{name:'Rainy-Day Tee', brand:'Krak-On', mainAbility:'Ink Saver (Main)'},
			{name:'Red Vector Tee', brand:'Takoroka', mainAbility:'Ink Saver (Main)'},
			{name:'Red-Check Shirt', brand:'Zekko', mainAbility:'Ink Saver (Main)'},
			{name:'Reel Sweat', brand:'Zekko', mainAbility:'Special Duration Up'},
			{name:'Reggae Tee', brand:'Skalop', mainAbility:'Special Saver'},
			{name:'Retro Gamer Jersey', brand:'Zink', mainAbility:'Quick Respawn'},
			{name:'Retro Sweat', brand:'SquidForce', mainAbility:'Defense Up'},
			{name:'Rockenberg Black', brand:'Rockenberg', mainAbility:'Damage Up'},
			{name:'Rockenberg White', brand:'Rockenberg', mainAbility:'Ink Recovery Up'},
			{name:'Rodeo Shirt', brand:'Krak-On', mainAbility:'Quick Super Jump'},
			{name:'Round-Collar Shirt', brand:'Rockenberg', mainAbility:'Ink Saver (Sub)'},
			{name:'Sage Polo', brand:'Splash Mob', mainAbility:'Cold Blooded'},
			{name:'Sailor-Stripe Tee', brand:'Splash Mob', mainAbility:'Run Speed Up'},
			{name:'Samurai Jacket', brand:'amiibo', mainAbility:'Special Charge Up'},
			{name:'School Jersey', brand:'Zink', mainAbility:'Ninja Squid'},
			{name:'School Uniform', brand:'amiibo', mainAbility:'Ink Recovery Up'},
			{name:'Shirt & Tie', brand:'Splash Mob', mainAbility:'Special Saver'},
			{name:'Shrimp-Pink Polo', brand:'Splash Mob', mainAbility:'Ninja Squid'},
			{name:'Sky-Blue Squideye', brand:'Tentatek', mainAbility:'Cold Blooded'},
			{name:'Slipstream United', brand:'Takoroka', mainAbility:'Defense Up'},
			{name:'SQUID GIRL Tunic', brand:'The SQUID GIRL', mainAbility:'Damage Up'},
			{name:'Squid Satin Jacket', brand:'Zekko', mainAbility:'Quick Respawn'},
			{name:'Squid-Pattern Waistcoat', brand:'Krak-On', mainAbility:'Special Duration Up'},
			{name:'Squid-Stitch Tee', brand:'Skalop', mainAbility:'Swim Speed Up'},
			{name:'Squidmark LS', brand:'SquidForce', mainAbility:'Haunt'},
			{name:'Squidmark Sweat', brand:'SquidForce', mainAbility:'Bomb Range Up'},
			{name:'Squidstar Waistcoat', brand:'Krak-On', mainAbility:'Cold Blooded'},
			{name:'Striped Peaks LS', brand:'Inkline', mainAbility:'Quick Super Jump'},
			{name:'Striped Rugby', brand:'Takoroka', mainAbility:'Run Speed Up'},
			{name:'Striped Shirt', brand:'Splash Mob', mainAbility:'Quick Super Jump'},
			{name:'Sunny-Day Tee', brand:'Krak-On', mainAbility:'Special Charge Up'},
			{name:'Traditional Apron', brand:'Famitsu', mainAbility:'Quick Respawn'},
			{name:'Tricolor Rugby', brand:'Takoroka', mainAbility:'Quick Respawn'},
			{name:'Urchins Jersey', brand:'Zink', mainAbility:'Run Speed Up'},
			{name:'Varsity Baseball LS', brand:'Splash Mob', mainAbility:'Recon'},
			{name:'Varsity Jacket', brand:'Zekko', mainAbility:'Damage Up'},
			{name:'Vintage Check Shirt', brand:'Rockenberg', mainAbility:'Haunt'},
			{name:'White 8-Bit FishFry', brand:'Firefin', mainAbility:'Recon'},
			{name:'White Anchor Tee', brand:'SquidForce', mainAbility:'Ninja Squid'},
			{name:'White Baseball LS', brand:'Rockenberg', mainAbility:'Quick Super Jump'},
			{name:'White Inky Rider', brand:'Rockenberg', mainAbility:'Special Duration Up'},
			{name:'White Layered LS', brand:'SquidForce', mainAbility:'Special Saver'},
			{name:'White Line Tee', brand:'KOG', mainAbility:'Swim Speed Up'},
			{name:'White LS', brand:'SquidForce', mainAbility:'Ink Recovery Up'},
			{name:'White Sailor Suit', brand:'Forge', mainAbility:'Ink Saver (Main)'},
			{name:'White Shirt', brand:'Splash Mob', mainAbility:'Ink Recovery Up'},
			{name:'White Striped LS', brand:'Splash Mob', mainAbility:'Quick Respawn'},
			{name:'White Tee', brand:'SquidForce', mainAbility:'Ink Saver (Sub)'},
			{name:'Yellow Layered LS', brand:'SquidForce', mainAbility:'Quick Super Jump'},
			{name:'Yellow Urban Vest', brand:'Firefin', mainAbility:'Haunt'},
			{name:'Zapfish Satin Jacket', brand:'Zekko', mainAbility:'Special Charge Up'},
			{name:'Zekko Baseball LS', brand:'Zekko', mainAbility:'Defense Up'},
			{name:'Zekko Hoodie', brand:'Zekko', mainAbility:'Ninja Squid'},
			{name:'Zink Layered LS', brand:'Zink', mainAbility:'Damage Up'},
			{name:'Zink LS', brand:'Zink', mainAbility:'Special Duration Up'},
		],
		shoes: [
			{name:'Acerola Rain Boots', brand:'Inkline', mainAbility:'Run Speed Up'},
			{name:'Armor Boot Replicas', brand:'Cuttlegear', mainAbility:'Ink Saver (Main)'},
			{name:'Banana Basics', brand:'Krak-On', mainAbility:'Bomb Sniffer'},
			{name:'Black Seahorses', brand:'Zink', mainAbility:'Swim Speed Up'},
			{name:'Black Trainers', brand:'Tentatek', mainAbility:'Quick Respawn'},
			{name:'Blue Lo-Tops', brand:'Zekko', mainAbility:'Defense Up'},
			{name:'Blue Moto Boots', brand:'Rockenberg', mainAbility:'Ink Resistance Up'},
			{name:'Blue Sea Slugs', brand:'Tentatek', mainAbility:'Special Charge Up'},
			{name:'Blue Slip-Ons', brand:'Krak-On', mainAbility:'Bomb Range Up'},
			{name:'Blueberry Casuals', brand:'Krak-On', mainAbility:'Ink Saver (Sub)'},
			{name:'Bubble Rain Boots', brand:'Inkline', mainAbility:'Damage Up'},
			{name:'Cherry Kicks', brand:'Rockenberg', mainAbility:'Stealth Jump'},
			{name:'Choco Clogs', brand:'Krak-On', mainAbility:'Quick Respawn'},
			{name:'Clownfish Basics', brand:'Krak-On', mainAbility:'Special Charge Up'},
			{name:'Crazy Arrows', brand:'Takoroka', mainAbility:'Stealth Jump'},
			{name:'Cream Basics', brand:'Krak-On', mainAbility:'Special Saver'},
			{name:'Cream Hi-Tops', brand:'Krak-On', mainAbility:'Stealth Jump'},
			{name:'Custom Trail Boots', brand:'Inkline', mainAbility:'Special Duration Up'},
			{name:'Cyan Trainers', brand:'Tentatek', mainAbility:'Damage Up'},
			{name:'Gold Hi-Horses', brand:'Zink', mainAbility:'Run Speed Up'},
			{name:'Green Rain Boots', brand:'Inkline', mainAbility:'Stealth Jump'},
			{name:'Hero Runner Replicas', brand:'Cuttlegear', mainAbility:'Quick Super Jump'},
			{name:'Hunter Hi-Tops', brand:'Krak-On', mainAbility:'Ink Recovery Up'},
			{name:'Icy Down Boots', brand:'Tentatek', mainAbility:'Stealth Jump'},
			{name:'LE Lo-Tops', brand:'Zekko', mainAbility:'Ink Saver (Sub)'},
			{name:'LE Soccer Cleats', brand:'Takoroka', mainAbility:'Ink Resistance Up'},
			{name:'Mawcasins', brand:'Splash Mob', mainAbility:'Ink Recovery Up'},
			{name:'Moto Boots', brand:'Rockenberg', mainAbility:'Quick Respawn'},
			{name:'Neon Sea Slugs', brand:'Tentatek', mainAbility:'Ink Resistance Up'},
			{name:'Octoling Boots', brand:'Cuttlegear', mainAbility:'Special Saver'},
			{name:'Orange Arrows', brand:'Takoroka', mainAbility:'Ink Saver (Main)'},
			{name:'Orange Lo-Tops', brand:'Zekko', mainAbility:'Swim Speed Up'},
			{name:'Oyster Clogs', brand:'Krak-On', mainAbility:'Run Speed Up'},
			{name:'Pink Trainers', brand:'Tentatek', mainAbility:'Bomb Range Up'},
			{name:'Plum Casuals', brand:'Krak-On', mainAbility:'Damage Up'},
			{name:'Power Boots', brand:'amiibo', mainAbility:'Ink Saver (Main)'},
			{name:'Pro Trail Boots', brand:'Inkline', mainAbility:'Bomb Sniffer'},
			{name:'Punk Cherries', brand:'Rockenberg', mainAbility:'Bomb Sniffer'},
			{name:'Punk Whites', brand:'Rockenberg', mainAbility:'Special Charge Up'},
			{name:'Punk Yellows', brand:'Rockenberg', mainAbility:'Special Saver'},
			{name:'Purple Hi-Horses', brand:'Zink', mainAbility:'Special Duration Up'},
			{name:'Purple Sea Slugs', brand:'Tentatek', mainAbility:'Run Speed Up'},
			{name:'Red Hi-Horses', brand:'Zink', mainAbility:'Ink Saver (Main)'},
			{name:'Red Hi-Tops', brand:'Krak-On', mainAbility:'Ink Resistance Up'},
			{name:'Red Sea Slugs', brand:'Tentatek', mainAbility:'Special Saver'},
			{name:'Red Slip-Ons', brand:'Krak-On', mainAbility:'Quick Super Jump'},
			{name:'Red Work Boots', brand:'Rockenberg', mainAbility:'Quick Super Jump'},
			{name:'Roasted Brogues', brand:'Rockenberg', mainAbility:'Defense Up'},
			{name:'Samurai Shoes', brand:'amiibo', mainAbility:'Special Duration Up'},
			{name:'School Shoes', brand:'amiibo', mainAbility:'Ink Saver (Sub)'},
			{name:'Shark Moccasins', brand:'Splash Mob', mainAbility:'Bomb Range Up'},
			{name:'Snowy Down Boots', brand:'Tentatek', mainAbility:'Quick Super Jump'},
			{name:'Soccer Cleats', brand:'Takoroka', mainAbility:'Bomb Sniffer'},
			{name:'SQUID GIRL Shoes', brand:'The SQUID GIRL', mainAbility:'Swim Speed Up'},
			{name:'Squid-Stitch Slip-Ons', brand:'Krak-On', mainAbility:'Defense Up'},
			{name:'Squink Wingtips', brand:'Rockenberg', mainAbility:'Quick Respawn'},
			{name:'Strapping Reds', brand:'Splash Mob', mainAbility:'Ink Resistance Up'},
			{name:'Strapping Whites', brand:'Splash Mob', mainAbility:'Ink Saver (Sub)'},
			{name:'Tan Work Boots', brand:'Rockenberg', mainAbility:'Bomb Range Up'},
			{name:'Traditional Sandals', brand:'Famitsu', mainAbility:'Run Speed Up'},
			{name:'Trail Boots', brand:'Inkline', mainAbility:'Ink Recovery Up'},
			{name:'Turquoise Kicks', brand:'Rockenberg', mainAbility:'Special Charge Up'},
			{name:'White Arrows', brand:'Takoroka', mainAbility:'Special Duration Up'},
			{name:'White Kicks', brand:'Rockenberg', mainAbility:'Swim Speed Up'},
			{name:'White Seahorses', brand:'Zink', mainAbility:'Ink Recovery Up'},
			{name:'Yellow Seahorses', brand:'Zink', mainAbility:'Bomb Sniffer'},
			{name:'Zombie Hi-Horses', brand:'Zink', mainAbility:'Special Charge Up'},
		]
	},
	brands: [
		{name:'Firefin', commonAbility:'Ink Saver (Sub)', uncommonAbility:'Ink Recovery Up'},
		{name:'Forge', commonAbility:'Special Duration Up', uncommonAbility:'Ink Saver (Sub)'},
		{name:'Inkline', commonAbility:'Defense Up', uncommonAbility:'Damage Up'},
		{name:'Krak-On', commonAbility:'Swim Speed Up', uncommonAbility:'Defense Up'},
		{name:'Rockenberg', commonAbility:'Run Speed Up', uncommonAbility:'Swim Speed Up'},
		{name:'Skalop', commonAbility:'Quick Respawn', uncommonAbility:'Special Saver'},
		{name:'Splash Mob', commonAbility:'Ink Saver (Main)', uncommonAbility:'Run Speed Up'},
		{name:'SquidForce', commonAbility:'Damage Up', uncommonAbility:'Ink Saver (Main)'},
		{name:'Takoroka', commonAbility:'Special Charge Up', uncommonAbility:'Special Duration Up'},
		{name:'Tentatek', commonAbility:'Ink Recovery Up', uncommonAbility:'Quick Super Jump'},
		{name:'Zekko', commonAbility:'Special Saver', uncommonAbility:'Special Charge Up'},
		{name:'Zink', commonAbility:'Quick Super Jump', uncommonAbility:'Quick Respawn'},
		{name:'Amiibo', commonAbility:'', uncommonAbility:''},
		{name:'Cuttlegear', commonAbility:'', uncommonAbility:''},
		{name:'KOG', commonAbility:'', uncommonAbility:''},
		{name:'Famitsu', commonAbility:'', uncommonAbility:''},
		{name:'The SQUID Girl', commonAbility:'', uncommonAbility:''}
	],
	abilities: [
		'Bomb Range Up',
		'Bomb Sniffer',
		'Cold Blooded',
		'Comeback',
		'Damage Up',
		'Defense Up',
		'Haunt',
		'Ink Recovery Up',
		'Ink Resistance Up',
		'Ink Saver (Main)',
		'Ink Saver (Sub)',
		'Last-Ditch Effort',
		'Ninja Squid',
		'Opening Gambit',
		'Quick Respawn',
		'Quick Super Jump',
		'Recon',
		'Run Speed Up',
		'Special Charge Up',
		'Special Duration Up',
		'Special Saver',
		'Stealth Jump',
		'Swim Speed Up',
		'Tenacity'],
	subAbilities: [
		'Bomb Range Up',
		'Damage Up',
		'Defense Up',
		'Ink Recovery Up',
		'Ink Saver (Main)',
		'Ink Saver (Sub)',
		'Quick Respawn',
		'Quick Super Jump',
		'Run Speed Up',
		'Special Charge Up',
		'Special Duration Up',
		'Special Saver',
		'Swim Speed Up'],
	teamCombinations: [
		[0, 0, 0, 0, 1, 1, 1, 1],
		[0, 0, 0, 1, 0, 1, 1, 1],
		[0, 0, 0, 1, 1, 0, 1, 1],
		[0, 0, 0, 1, 1, 1, 0, 1],
		[0, 0, 0, 1, 1, 1, 1, 0],
		[0, 0, 1, 0, 0, 1, 1, 1],
		[0, 0, 1, 0, 1, 0, 1, 1],
		[0, 0, 1, 0, 1, 1, 0, 1],
		[0, 0, 1, 0, 1, 1, 1, 0],
		[0, 0, 1, 1, 0, 0, 1, 1],
		[0, 0, 1, 1, 0, 1, 0, 1],
		[0, 0, 1, 1, 0, 1, 1, 0],
		[0, 0, 1, 1, 1, 0, 0, 1],
		[0, 0, 1, 1, 1, 0, 1, 0],
		[0, 0, 1, 1, 1, 1, 0, 0],
		[0, 1, 0, 0, 0, 1, 1, 1],
		[0, 1, 0, 0, 1, 0, 1, 1],
		[0, 1, 0, 0, 1, 1, 0, 1],
		[0, 1, 0, 0, 1, 1, 1, 0],
		[0, 1, 0, 1, 0, 0, 1, 1],
		[0, 1, 0, 1, 0, 1, 0, 1],
		[0, 1, 0, 1, 0, 1, 1, 0],
		[0, 1, 0, 1, 1, 0, 0, 1],
		[0, 1, 0, 1, 1, 0, 1, 0],
		[0, 1, 0, 1, 1, 1, 0, 0],
		[0, 1, 1, 0, 0, 0, 1, 1],
		[0, 1, 1, 0, 0, 1, 0, 1],
		[0, 1, 1, 0, 0, 1, 1, 0],
		[0, 1, 1, 0, 1, 0, 0, 1],
		[0, 1, 1, 0, 1, 0, 1, 0],
		[0, 1, 1, 0, 1, 1, 0, 0],
		[0, 1, 1, 1, 0, 0, 0, 1],
		[0, 1, 1, 1, 0, 0, 1, 0],
		[0, 1, 1, 1, 0, 1, 0, 0],
		[0, 1, 1, 1, 1, 0, 0, 0],
		[1, 1, 1, 1, 0, 0, 0, 0],
		[1, 1, 1, 0, 1, 0, 0, 0],
		[1, 1, 1, 0, 0, 1, 0, 0],
		[1, 1, 1, 0, 0, 0, 1, 0],
		[1, 1, 1, 0, 0, 0, 0, 1],
		[1, 1, 0, 1, 1, 0, 0, 0],
		[1, 1, 0, 1, 0, 1, 0, 0],
		[1, 1, 0, 1, 0, 0, 1, 0],
		[1, 1, 0, 1, 0, 0, 0, 1],
		[1, 1, 0, 0, 1, 1, 0, 0],
		[1, 1, 0, 0, 1, 0, 1, 0],
		[1, 1, 0, 0, 1, 0, 0, 1],
		[1, 1, 0, 0, 0, 1, 1, 0],
		[1, 1, 0, 0, 0, 1, 0, 1],
		[1, 1, 0, 0, 0, 0, 1, 1],
		[1, 0, 1, 1, 1, 0, 0, 0],
		[1, 0, 1, 1, 0, 1, 0, 0],
		[1, 0, 1, 1, 0, 0, 1, 0],
		[1, 0, 1, 1, 0, 0, 0, 1],
		[1, 0, 1, 0, 1, 1, 0, 0],
		[1, 0, 1, 0, 1, 0, 1, 0],
		[1, 0, 1, 0, 1, 0, 0, 1],
		[1, 0, 1, 0, 0, 1, 1, 0],
		[1, 0, 1, 0, 0, 1, 0, 1],
		[1, 0, 1, 0, 0, 0, 1, 1],
		[1, 0, 0, 1, 1, 1, 0, 0],
		[1, 0, 0, 1, 1, 0, 1, 0],
		[1, 0, 0, 1, 1, 0, 0, 1],
		[1, 0, 0, 1, 0, 1, 1, 0],
		[1, 0, 0, 1, 0, 1, 0, 1],
		[1, 0, 0, 1, 0, 0, 1, 1],
		[1, 0, 0, 0, 1, 1, 1, 0],
		[1, 0, 0, 0, 1, 1, 0, 1],
		[1, 0, 0, 0, 1, 0, 1, 1],
		[1, 0, 0, 0, 0, 1, 1, 1]]
};
