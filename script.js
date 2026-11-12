// <!-- =====================================================================
//        APPLICATION JAVASCRIPT (Data, 3D Hero, 3D Venue Hall, Customizer, Storage)
//        ===================================================================== -->
    /**
     * =========================================================================
     * 1. EDITABLE STUDIO CONFIGURATION & PRICING DATA
     * =========================================================================
     */
    const STUDIO_CONFIG = {
      studioName: 'Paris Event Organization',
      // Configurable placeholder contact details (replace before production launch)
      contactPhoneDisplay: '+918608865811 (Configurable Studio Line)',
      whatsappNumberRaw: '918608865811', // Replace with international digits only e.g. '919876543210'
      currencySymbol: '₹',
      packages: {
        essential: {
          id: 'essential',
          name: 'Essential Scenography',
          tagline: 'Refined architectural framing, curated floral focal points & balanced banquet lighting.',
          basePrice: 8500,
          perGuest: 18,
          features: [
            'Custom Stage Platform & Photographic / Draped Backdrop',
            'Curated Floral Stage Clusters & Welcome Entrance Arch',
            'Warm Architectural Wash & Stage Key Spotlighting',
            'Standard Guest Table Linens & Centerpiece Styling'
          ]
        },
        signature: {
          id: 'signature',
          name: 'Signature Atelier',
          tagline: 'Our most commissioned full-hall scenography with lush botanicals & theatrical lighting.',
          basePrice: 14500,
          perGuest: 28,
          recommended: true,
          features: [
            'Monumental Multi-Tier Stage or Mandap Architecture',
            'Lush Fresh Botanical Installations & Suspended Chandeliers',
            'Programmable Theatrical Spotlights & Ambient Colour Gels',
            'Bespoke Silk/Velvet Table Drapery, Candelabras & VIP Lounge'
          ]
        },
        imperial: {
          id: 'imperial',
          name: 'Imperial Couture',
          tagline: 'Bespoke museum-grade production, custom millwork, ceiling clouds & full spatial direction.',
          basePrice: 26000,
          perGuest: 45,
          features: [
            'Custom Architectural Pavilion, Runway or Panorama LED Scenography',
            'Opulent Floor-to-Ceiling Floral Artistry & Entrance Tunnel',
            'Full Concert-Grade Theatrical Rig & Chandelier Canopy',
            'Dedicated On-Site Scenographer, CAD Twins & VIP Concierge'
          ]
        }
      },
      modifiers: {
        stageSize: { Compact: -1200, Grand: 0, Monumental: 3200 },
        floralDensity: { Minimal: -1000, Lush: 0, Opulent: 2800 },
        hangingDecor: { 'Crystal Chandeliers': 1200, 'Suspended Floral Clouds': 1800 }
      }
    };

    /**
     * =========================================================================
     * 2. AUTHENTIC EVENT PHOTOGRAPHY DATABASE (12 CATEGORIES + GALLERY ITEMS)
     * =========================================================================
     */
    const EVENT_CATEGORIES = [
      {
        id: 'wedding-planning',
        title: 'Wedding Planning',
        tag: '01 / Signature Ceremonies',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
        description: 'End-to-end architectural wedding scenography—from sacred ceremony pavilions and floral aisles to grand reception transformations.',
        specs: { capacity: '150 – 1,000 Guests', setupTime: '18 – 36 Hours', footprint: 'Grand Ballroom / Estate' },
        presetTheme: 'Royal Gold',
        presetStage: 'Royal Mandap Pavilion',
        styles: [
          { name: 'Luxury Floral Royal Stage', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80' },
          { name: 'Ivory & Crystal Ballroom', img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80' },
          { name: 'Garden Estate Vows', img: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80' }
        ]
      },
      {
        id: 'wedding-reception',
        title: 'Wedding Reception',
        tag: '02 / Evening Galas',
        image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80',
        description: 'Candlelit evening banquets engineered with suspended chandeliers, sculptural dining tablescapes, and dramatic couple stages.',
        specs: { capacity: '200 – 900 Guests', setupTime: '14 – 24 Hours', footprint: 'Banquet Hall / Pavilion' },
        presetTheme: 'White & Ivory',
        presetStage: 'Classic Proscenium',
        styles: [
          { name: 'Candlelit Chandelier Gala', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80' },
          { name: 'White & Gold Symphony', img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80' },
          { name: 'Velvet Evening Lounge', img: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80' }
        ]
      },
      {
        id: 'engagement-ceremony',
        title: 'Engagement Ceremony',
        tag: '03 / Intimate Milestones',
        image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1000&q=80',
        description: 'Romantic pastel floral arches, intimate VIP sofa lounges, and soft rose-champagne uplighting crafted for ring ceremonies.',
        specs: { capacity: '80 – 350 Guests', setupTime: '8 – 12 Hours', footprint: 'Boutique Hall / Terrace' },
        presetTheme: 'Pink & Pastel',
        presetStage: 'Classic Proscenium',
        styles: [
          { name: 'Pastel Rose Ring Arch', img: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80' },
          { name: 'Botanical Glasshouse', img: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=800&q=80' },
          { name: 'Champagne Sofa Lounge', img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80' }
        ]
      },
      {
        id: 'birthday-celebrations',
        title: 'Birthday Celebrations',
        tag: '04 / Milestone Soirées',
        image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1000&q=80',
        description: 'Editorial milestone birthday stages featuring bespoke floral installations, sculptural balloon artistry, and custom lounge seating.',
        specs: { capacity: '50 – 400 Guests', setupTime: '6 – 10 Hours', footprint: 'Salon / Private Venue' },
        presetTheme: 'Pink & Pastel',
        presetStage: 'Classic Proscenium',
        styles: [
          { name: 'Luxury Milestone Stage', img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80' },
          { name: 'Sculptural Balloon & Silk', img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80' },
          { name: 'Minimalist Candlelight Table', img: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=800&q=80' }
        ]
      },
      {
        id: 'anniversary-celebrations',
        title: 'Anniversary Celebrations',
        tag: '05 / Timeless Tributes',
        image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1000&q=80',
        description: 'Warm golden-hour banquet tablescapes, heirloom photo galleries, and intimate acoustic stage settings honouring decades together.',
        specs: { capacity: '60 – 300 Guests', setupTime: '6 – 12 Hours', footprint: 'Banquet Salon / Courtyard' },
        presetTheme: 'Royal Gold',
        presetStage: 'Classic Proscenium',
        styles: [
          { name: 'Golden Candelabra Banquet', img: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=800&q=80' },
          { name: 'Ivory Heritage Lounge', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80' },
          { name: 'Starlight Courtyard Dinner', img: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&w=800&q=80' }
        ]
      },
      {
        id: 'baby-shower',
        title: 'Baby Shower',
        tag: '06 / Botanical Welcomes',
        image: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1000&q=80',
        description: 'Soft botanical greenery, pastel floral meadows, and sunlit lounge vignettes created for serene daytime celebrations.',
        specs: { capacity: '40 – 180 Guests', setupTime: '5 – 8 Hours', footprint: 'Conservatory / Garden Salon' },
        presetTheme: 'Green & Botanical',
        presetStage: 'Classic Proscenium',
        styles: [
          { name: 'Botanical Meadow Lounge', img: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=800&q=80' },
          { name: 'Pastel Garden Arch', img: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80' },
          { name: 'Ivory & Sage Tea Salon', img: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80' }
        ]
      },
      {
        id: 'corporate-events',
        title: 'Corporate Events',
        tag: '07 / Executive Summits',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80',
        description: 'Architectural keynote stages, precision sightline seating, and broadcast-grade theatrical lighting for global leadership forums.',
        specs: { capacity: '150 – 1,000 Guests', setupTime: '12 – 24 Hours', footprint: 'Convention Ballroom' },
        presetTheme: 'Blue & Silver',
        presetStage: 'Curved LED Panorama',
        styles: [
          { name: 'Executive Keynote Stage', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80' },
          { name: 'Award Gala Banquet', img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80' },
          { name: 'Architectural Symposium', img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80' }
        ]
      },
      {
        id: 'product-launches',
        title: 'Product Launches',
        tag: '08 / Brand Reveals',
        image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1000&q=80',
        description: 'High-contrast spotlight runways, panoramic LED reveal backdrops, and VIP press lounges engineered for dramatic unveilings.',
        specs: { capacity: '100 – 600 Guests', setupTime: '14 – 24 Hours', footprint: 'Exhibition / Runway Hall' },
        presetTheme: 'Blue & Silver',
        presetStage: 'Modern Fashion Runway',
        styles: [
          { name: 'Spotlight Reveal Runway', img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80' },
          { name: 'Curved Panorama Showcase', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80' },
          { name: 'Monochrome VIP Lounge', img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80' }
        ]
      },
      {
        id: 'college-events',
        title: 'College Events',
        tag: '09 / Cultural Festivals',
        image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80',
        description: 'High-energy festival mainstages, intelligent beam arrays, and wide-span audience layouts built for university cultural fests.',
        specs: { capacity: '300 – 1,000+ Guests', setupTime: '12 – 20 Hours', footprint: 'Auditorium / Open Arena' },
        presetTheme: 'Blue & Silver',
        presetStage: 'Curved LED Panorama',
        styles: [
          { name: 'Festival Concert Rig', img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80' },
          { name: 'Youth Summit Stage', img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80' },
          { name: 'Neon & Truss Showcase', img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80' }
        ]
      },
      {
        id: 'private-parties',
        title: 'Private Parties',
        tag: '10 / After-Hours Soirées',
        image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1000&q=80',
        description: 'Bespoke cocktail lounges, ambient warm string canopies, and intimate DJ/acoustic focal points for private celebrations.',
        specs: { capacity: '40 – 250 Guests', setupTime: '5 – 9 Hours', footprint: 'Rooftop / Private Villa' },
        presetTheme: 'Royal Gold',
        presetStage: 'Classic Proscenium',
        styles: [
          { name: 'Velvet Cocktail Salon', img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80' },
          { name: 'Candlelit Supper Club', img: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=800&q=80' },
          { name: 'Starlight Terrace Lounge', img: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&w=800&q=80' }
        ]
      },
      {
        id: 'outdoor-events',
        title: 'Outdoor Events',
        tag: '11 / Open-Air Pavilions',
        image: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&w=1000&q=80',
        description: 'Garden estate pavilions, fairy-light canopies, and natural botanical architecture harmonised with open landscapes.',
        specs: { capacity: '100 – 800 Guests', setupTime: '14 – 28 Hours', footprint: 'Garden Lawn / Courtyard' },
        presetTheme: 'Green & Botanical',
        presetStage: 'Classic Proscenium',
        styles: [
          { name: 'Fairy-Light Garden Canopy', img: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&w=800&q=80' },
          { name: 'Botanical Lawn Pavilion', img: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80' },
          { name: 'Al Fresco Long Banquet', img: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=800&q=80' }
        ]
      },
      {
        id: 'traditional-ceremonies',
        title: 'Traditional Ceremonies',
        tag: '12 / Sacred Heritage',
        image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80',
        description: 'Carved temple-inspired mandaps, cascading marigold and jasmine garlands, brass oil lamps, and sacred fire pavilions.',
        specs: { capacity: '150 – 1,000 Guests', setupTime: '16 – 30 Hours', footprint: 'Heritage Hall / Courtyard' },
        presetTheme: 'Red & Gold',
        presetStage: 'Royal Mandap Pavilion',
        styles: [
          { name: 'Royal Marigold & Brass Mandap', img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80' },
          { name: 'Crimson & Gold Heritage Stage', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80' },
          { name: 'Sacred Temple Pillar Pavilion', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80' }
        ]
      }
    ];

    const DESIGN_GALLERY_ITEMS = [
      {
        id: 'gal-1',
        filter: 'wedding',
        categoryLabel: 'Wedding Stage',
        title: 'Luxury Floral Royal Stage',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
        description: 'Cascading ivory roses, champagne hydrangeas, and architectural gold arches framing an elevated couple stage.',
        dimensions: '42ft × 18ft Stage Footprint',
        palette: 'Royal Gold',
        stageType: 'Classic Proscenium',
        lighting: 'Warm Candlelight'
      },
      {
        id: 'gal-2',
        filter: 'outdoor',
        categoryLabel: 'Traditional Ceremony',
        title: 'Royal Marigold & Brass Mandap',
        image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80',
        description: 'Hand-strung marigold curtains, heritage brass bells, and crimson silk drapery crafted for sacred traditional rituals.',
        dimensions: '28ft × 28ft Four-Pillar Mandap',
        palette: 'Red & Gold',
        stageType: 'Royal Mandap Pavilion',
        lighting: 'Warm Candlelight'
      },
      {
        id: 'gal-3',
        filter: 'wedding',
        categoryLabel: 'Wedding Reception',
        title: 'White & Gold Chandelier Gala',
        image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=80',
        description: 'Monochromatic alabaster florals paired with suspended crystal chandeliers and mirrored stage risers.',
        dimensions: '48ft × 20ft Grand Banquet Stage',
        palette: 'White & Ivory',
        stageType: 'Classic Proscenium',
        lighting: 'Crisp Architectural White'
      },
      {
        id: 'gal-4',
        filter: 'birthday',
        categoryLabel: 'Birthday & Milestone',
        title: 'Luxury Milestone Floral & Balloon Stage',
        image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1000&q=80',
        description: 'Organic pastel installations layered with bespoke plinths, ambient uplights, and velvet lounge seating.',
        dimensions: '24ft × 14ft Feature Backdrop',
        palette: 'Pink & Pastel',
        stageType: 'Classic Proscenium',
        lighting: 'Rose & Champagne Wash'
      },
      {
        id: 'gal-5',
        filter: 'corporate',
        categoryLabel: 'Corporate Event',
        title: 'Executive Keynote & LED Panorama',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80',
        description: 'Clean architectural stage geometry with wide-format visual projection backdrop and precision speaker spotlights.',
        dimensions: '48ft × 16ft Conference Stage',
        palette: 'Blue & Silver',
        stageType: 'Curved LED Panorama',
        lighting: 'Twilight Sapphire & Gold'
      },
      {
        id: 'gal-6',
        filter: 'corporate',
        categoryLabel: 'Product Launch',
        title: 'Spotlight Runway & Reveal Stage',
        image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1000&q=80',
        description: 'High-drama theatrical light beams cutting across a sleek central catwalk for automotive, tech, or couture launches.',
        dimensions: '44ft Catwalk + Main Stage',
        palette: 'Blue & Silver',
        stageType: 'Modern Fashion Runway',
        lighting: 'Crisp Architectural White'
      },
      {
        id: 'gal-7',
        filter: 'outdoor',
        categoryLabel: 'Outdoor Garden',
        title: 'Fairy-Light Pavilion & Lawn Banquet',
        image: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&w=1000&q=80',
        description: 'Canopy of thousands of warm micro-bulbs suspended over botanical dining tables and an open-air garden stage.',
        dimensions: 'Open Lawn / 36ft Pavilion',
        palette: 'Green & Botanical',
        stageType: 'Classic Proscenium',
        lighting: 'Warm Candlelight'
      },
      {
        id: 'gal-8',
        filter: 'birthday',
        categoryLabel: 'Anniversary Lounge',
        title: 'Candlelit Golden Candelabra Banquet',
        image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1000&q=80',
        description: 'Tall brushed-brass candelabras, tapered ivory candles, and low rose runners designed for intimate evening dining.',
        dimensions: 'Full Hall Banquet Tablescape',
        palette: 'Royal Gold',
        stageType: 'Classic Proscenium',
        lighting: 'Warm Candlelight'
      },
      {
        id: 'gal-9',
        filter: 'wedding',
        categoryLabel: 'Engagement Stage',
        title: 'Pastel Rose & Velvet Ring Arch',
        image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1000&q=80',
        description: 'Layered blush peonies, garden roses, and brushed gold framing tailored for intimate engagement ceremonies.',
        dimensions: '26ft × 14ft Intimate Stage',
        palette: 'Pink & Pastel',
        stageType: 'Classic Proscenium',
        lighting: 'Rose & Champagne Wash'
      }
    ];

    /**
     * =========================================================================
     * 3. CENTRAL APPLICATION STATE & LOCALSTORAGE KEYS
     * =========================================================================
     */
    const STORAGE_KEYS = {
      SAVED_DESIGNS: 'atelier_lumiere_saved_designs_v1',
      ACTIVE_STATE: 'atelier_lumiere_active_state_v1',
      ENQUIRIES: 'atelier_lumiere_enquiries_v1'
    };

    const DEFAULT_STATE = {
      eventCategory: 'Wedding Planning',
      designTitle: 'Luxury Floral Royal Stage',
      designImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
      stageType: 'Classic Proscenium',
      stageSize: 'Grand',
      backdropStyle: 'Photographic Scenic Wall',
      floralDensity: 'Lush',
      decorStyle: 'Fresh Roses & Hydrangeas',
      hangingDecor: 'Crystal Chandeliers',
      lightingMood: 'Warm Candlelight',
      spotlights: 'Theatrical Beams On',
      seatingLayout: 'Round Banquet Tables',
      tableDecor: 'Ivory Silk & Gold Candelabra',
      entranceStyle: 'Lush Floral Tunnel Arch',
      colorTheme: 'Royal Gold',
      guestCount: 250,
      packageTier: 'signature'
    };

    let studioState = { ...DEFAULT_STATE };

    // Theme Color Palettes for 3D Materials
    const COLOR_PALETTES = {
      'Royal Gold': { primary: 0xd4af37, secondary: 0xf5f0e6, floral: 0xf4e4c1, fabric: 0x2a2118 },
      'White & Ivory': { primary: 0xe8e4dc, secondary: 0xffffff, floral: 0xfdfcf9, fabric: 0xd8d2c7 },
      'Pink & Pastel': { primary: 0xd9a79c, secondary: 0xf7dce4, floral: 0xf29cb8, fabric: 0x4a2c36 },
      'Red & Gold': { primary: 0xd4af37, secondary: 0x9e1b24, floral: 0xc81d25, fabric: 0x5c0d12 },
      'Green & Botanical': { primary: 0xc5b378, secondary: 0x2e6f40, floral: 0x4a8f5c, fabric: 0x1b3b24 },
      'Blue & Silver': { primary: 0xc0c8d4, secondary: 0x2c4d75, floral: 0x7aa2d4, fabric: 0x16253b }
    };

    // Lighting Configurations for 3D Scene
    const LIGHTING_CONFIGS = {
      'Warm Candlelight': { ambient: 0xffd6a3, ambientInt: 0.65, spot: 0xffdfad, spotInt: 1.85, fog: 0x120f0d },
      'Crisp Architectural White': { ambient: 0xf2f5fa, ambientInt: 0.78, spot: 0xffffff, spotInt: 2.0, fog: 0x111317 },
      'Rose & Champagne Wash': { ambient: 0xffb8cf, ambientInt: 0.68, spot: 0xffcde0, spotInt: 1.85, fog: 0x170e13 },
      'Twilight Sapphire & Gold': { ambient: 0x7c98e0, ambientInt: 0.62, spot: 0xffd27d, spotInt: 2.1, fog: 0x0b0e19 }
    };

    /**
     * =========================================================================
     * 4. HELPER: SAFE TEXTURE LOADER WITH PROCEDURAL FALLBACK
     * =========================================================================
     */
    function createFallbackCanvasTexture(titleText = 'PARIS EVENT ARGANIZATION') {
      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 576;
      const ctx = canvas.getContext('2d');

      const grad = ctx.createLinearGradient(0, 0, 1024, 576);
      grad.addColorStop(0, '#1e1916');
      grad.addColorStop(0.5, '#362a1e');
      grad.addColorStop(1, '#141217');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 1024, 576);

      ctx.strokeStyle = '#c9a86a';
      ctx.lineWidth = 4;
      ctx.strokeRect(36, 36, 952, 504);

      ctx.fillStyle = '#c9a86a';
      ctx.font = '600 22px Poppins, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('PARIS EVENT ORGANIZATION — SCENOGRAPHY REFERENCE', 512, 255);

      ctx.fillStyle = '#f5f2eb';
      ctx.font = '500 34px Poppins, sans-serif';
      ctx.fillText(titleText, 512, 315);

      const tex = new THREE.CanvasTexture(canvas);
      tex.needsUpdate = true;
      return tex;
    }

    function loadSafeTexture(url, label, onLoaded) {
      const loader = new THREE.TextureLoader();
      loader.setCrossOrigin('anonymous');
      loader.load(
        url,
        (texture) => {
          texture.minFilter = THREE.LinearFilter;
          texture.magFilter = THREE.LinearFilter;
          onLoaded(texture);
        },
        undefined,
        () => {
          onLoaded(createFallbackCanvasTexture(label));
        }
      );
    }

    /**
     * =========================================================================
     * 5. HERO & SCROLL-CONTROLLED 3D FLOATING PHOTO GALLERY SCENE
     * =========================================================================
     */
    function initHeroScroll3DScene() {
      const container = document.getElementById('hero-canvas-container');
      if (!container || !window.THREE) return;

      let renderer;
      try {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
      } catch (e) {
        return;
      }

      const isMobile = window.innerWidth < 768;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x0c0b0e, 0.036);

      const camera = new THREE.PerspectiveCamera(48, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.set(0, 1.4, 13);

      // Lighting
      const ambient = new THREE.AmbientLight(0xffe6c2, 0.75);
      scene.add(ambient);

      const keyLight = new THREE.SpotLight(0xd9b36c, 2.2, 45, Math.PI / 4, 0.5, 1);
      keyLight.position.set(6, 12, 12);
      scene.add(keyLight);

      const rimLight = new THREE.PointLight(0x8899cc, 1.1, 35);
      rimLight.position.set(-8, 5, -4);
      scene.add(rimLight);

      // Subtle Reflective Dark Marble Floor
      const floorGeo = new THREE.PlaneGeometry(80, 80);
      const floorMat = new THREE.MeshStandardMaterial({
        color: 0x0b0a0e,
        roughness: 0.25,
        metalness: 0.75
      });
      const floor = new THREE.Mesh(floorGeo, floorMat);
      floor.rotation.x = -Math.PI / 2;
      floor.position.y = -2.6;
      scene.add(floor);

      // Floating Real Event Photography Planes arranged in 3D Depth
      const photoSpecs = [
        {
          url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
          label: 'Luxury Floral Stage',
          pos: [3.6, 1.2, 4.5],
          rot: [0, -0.34, 0],
          scale: [4.4, 2.9]
        },
        {
          url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80',
          label: 'Candlelit Gala Reception',
          pos: [-3.9, 1.6, 0.5],
          rot: [0, 0.38, 0],
          scale: [4.6, 3.0]
        },
        {
          url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80',
          label: 'Traditional Marigold Mandap',
          pos: [3.8, 1.3, -4.5],
          rot: [0, -0.32, 0],
          scale: [4.5, 3.0]
        },
        {
          url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80',
          label: 'Architectural Keynote Stage',
          pos: [-3.5, 1.1, -9.2],
          rot: [0, 0.3, 0],
          scale: [4.6, 2.9]
        },
        {
          url: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&w=900&q=80',
          label: 'Outdoor Pavilion Canopy',
          pos: [0.4, 1.8, -14.5],
          rot: [0, -0.08, 0],
          scale: [5.4, 3.4]
        }
      ];

      const photoGroups = [];
      const frameMat = new THREE.MeshStandardMaterial({
        color: 0xc9a86a,
        metalness: 0.85,
        roughness: 0.25
      });

      photoSpecs.forEach((spec, idx) => {
        const group = new THREE.Group();
        group.position.set(...spec.pos);
        group.rotation.set(...spec.rot);
        group.userData = { baseY: spec.pos[1], phase: idx * 1.3 };

        const frameGeo = new THREE.BoxGeometry(spec.scale[0] + 0.14, spec.scale[1] + 0.14, 0.08);
        const frameMesh = new THREE.Mesh(frameGeo, frameMat);
        group.add(frameMesh);

        const planeGeo = new THREE.PlaneGeometry(spec.scale[0], spec.scale[1]);
        const planeMat = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          roughness: 0.4,
          metalness: 0.05
        });
        const photoMesh = new THREE.Mesh(planeGeo, planeMat);
        photoMesh.position.z = 0.045;
        group.add(photoMesh);

        loadSafeTexture(spec.url, spec.label, (tex) => {
          planeMat.map = tex;
          planeMat.needsUpdate = true;
        });

        scene.add(group);
        photoGroups.push(group);
      });

      // Ambient Champagne Gold Dust Particles
      const particleCount = isMobile ? 120 : 260;
      const pGeo = new THREE.BufferGeometry();
      const pPositions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount; i++) {
        pPositions[i * 3] = (Math.random() - 0.5) * 26;
        pPositions[i * 3 + 1] = Math.random() * 10 - 2;
        pPositions[i * 3 + 2] = (Math.random() - 0.5) * 34 - 4;
      }
      pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
      const pMat = new THREE.PointsMaterial({
        color: 0xd9b878,
        size: 0.065,
        transparent: true,
        opacity: 0.65
      });
      const particles = new THREE.Points(pGeo, pMat);
      scene.add(particles);

      // GSAP ScrollTrigger Synchronisation
      if (window.gsap && window.ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from('.hero-animate', {
          y: 26,
          opacity: 0,
          duration: 1.0,
          stagger: 0.14,
          ease: 'power3.out'
        });

        gsap.to(camera.position, {
          z: -10.5,
          y: 1.65,
          ease: 'none',
          scrollTrigger: {
            trigger: '#hero-section',
            start: 'top top',
            endTrigger: '#categories-section',
            end: 'top 30%',
            scrub: 1.2
          }
        });

        gsap.to(camera.rotation, {
          y: 0.08,
          ease: 'none',
          scrollTrigger: {
            trigger: '#hero-section',
            start: 'top top',
            endTrigger: '#categories-section',
            end: 'top 30%',
            scrub: 1.2
          }
        });
      }

      let pointerX = 0;
      window.addEventListener('pointermove', (e) => {
        pointerX = (e.clientX / window.innerWidth - 0.5) * 0.6;
      }, { passive: true });

      window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });

      const clock = new THREE.Clock();
      function animateHero() {
        requestAnimationFrame(animateHero);
        if (window.scrollY > window.innerHeight * 2.4) return;

        const t = clock.getElapsedTime();
        photoGroups.forEach((grp) => {
          grp.position.y = grp.userData.baseY + Math.sin(t * 0.9 + grp.userData.phase) * 0.14;
        });

        particles.rotation.y = t * 0.02;
        camera.position.x += (pointerX - camera.position.x) * 0.04;

        renderer.render(scene, camera);
      }
      animateHero();
    }

    /**
     * =========================================================================
     * 6. INTERACTIVE 3D ARCHITECTURAL EVENT HALL ENGINE
     * =========================================================================
     */
    const VenueHall3D = (function () {
      let scene, camera, renderer, controls;
      let wrapperEl;
      let isInitialized = false;

      let stageGroup, backdropMesh, backdropMat, stagePlatformMat;
      let floralGroup, seatingGroup, entranceGroup, chandelierGroup, spotlightBeamsGroup;
      let ambientLight, hemiLight, stageSpotLeft, stageSpotRight, hallWallMat, hallFloorMat;

      const HALL = {
        width: 34,
        length: 44,
        height: 13
      };

      const CAMERA_PRESETS = {
        overview: {
          label: 'Full Venue Overview',
          pos: [0, 7.2, 16.5],
          target: [0, 2.4, -8]
        },
        frontStage: {
          label: 'Front Stage View',
          pos: [0, 3.2, 3.5],
          target: [0, 2.8, -14.5]
        },
        leftWing: {
          label: 'Left-Side Wing View',
          pos: [-12.5, 4.2, -3.5],
          target: [1.5, 2.5, -13.5]
        },
        rightWing: {
          label: 'Right-Side Wing View',
          pos: [12.5, 4.2, -3.5],
          target: [-1.5, 2.5, -13.5]
        },
        backEntrance: {
          label: 'Back Seating & Entrance View',
          pos: [0, 3.8, 18.8],
          target: [0, 2.6, 5]
        },
        balcony: {
          label: 'Elevated Balcony View',
          pos: [-9.5, 9.8, 14.5],
          target: [0, 2.0, -9]
        },
        stageCloseup: {
          label: 'Stage Close-Up',
          pos: [2.4, 2.9, -6.8],
          target: [0, 2.8, -15.2]
        }
      };

      function init() {
        wrapperEl = document.getElementById('venue-canvas-wrapper');
        if (!wrapperEl || !window.THREE) return;

        try {
          renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
        } catch (err) {
          document.getElementById('webgl-fallback').classList.remove('hidden');
          return;
        }

        const isMobile = window.innerWidth < 768;
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
        renderer.setSize(wrapperEl.clientWidth, wrapperEl.clientHeight);
        renderer.shadowMap.enabled = !isMobile;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.08;
        wrapperEl.appendChild(renderer.domElement);

        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0d0b10);
        scene.fog = new THREE.FogExp2(0x120f0d, 0.015);

        camera = new THREE.PerspectiveCamera(50, wrapperEl.clientWidth / wrapperEl.clientHeight, 0.2, 90);
        camera.position.set(...CAMERA_PRESETS.overview.pos);

        controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.06;
        controls.maxDistance = 28;
        controls.minDistance = 3.2;
        controls.maxPolarAngle = Math.PI * 0.49;
        controls.target.set(...CAMERA_PRESETS.overview.target);

        buildArchitecture();
        buildLightingRig();

        stageGroup = new THREE.Group();
        floralGroup = new THREE.Group();
        seatingGroup = new THREE.Group();
        entranceGroup = new THREE.Group();
        chandelierGroup = new THREE.Group();
        spotlightBeamsGroup = new THREE.Group();

        scene.add(stageGroup, floralGroup, seatingGroup, entranceGroup, chandelierGroup, spotlightBeamsGroup);

        isInitialized = true;
        syncWithState(studioState);

        window.addEventListener('resize', handleResize);
        animate();
      }

      function buildArchitecture() {
        const floorGeo = new THREE.PlaneGeometry(HALL.width, HALL.length);
        hallFloorMat = new THREE.MeshStandardMaterial({
          color: 0x1a171e,
          roughness: 0.22,
          metalness: 0.65
        });
        const floor = new THREE.Mesh(floorGeo, hallFloorMat);
        floor.rotation.x = -Math.PI / 2;
        floor.receiveShadow = true;
        scene.add(floor);

        const aisleGeo = new THREE.PlaneGeometry(3.4, HALL.length - 8);
        const aisleMat = new THREE.MeshStandardMaterial({
          color: 0x2a2118,
          roughness: 0.78,
          metalness: 0.1
        });
        const aisle = new THREE.Mesh(aisleGeo, aisleMat);
        aisle.rotation.x = -Math.PI / 2;
        aisle.position.set(0, 0.012, 1.5);
        aisle.name = 'aisleRunner';
        scene.add(aisle);

        const ceilGeo = new THREE.PlaneGeometry(HALL.width, HALL.length);
        const ceilMat = new THREE.MeshStandardMaterial({
          color: 0x131117,
          roughness: 0.7
        });
        const ceiling = new THREE.Mesh(ceilGeo, ceilMat);
        ceiling.rotation.x = Math.PI / 2;
        ceiling.position.y = HALL.height;
        scene.add(ceiling);

        const beamMat = new THREE.MeshStandardMaterial({ color: 0x241f29, metalness: 0.4, roughness: 0.5 });
        for (let z = -18; z <= 18; z += 6) {
          const beam = new THREE.Mesh(new THREE.BoxGeometry(HALL.width, 0.45, 0.55), beamMat);
          beam.position.set(0, HALL.height - 0.22, z);
          scene.add(beam);
        }

        hallWallMat = new THREE.MeshStandardMaterial({
          color: 0x1b1822,
          roughness: 0.65,
          metalness: 0.15
        });

        const stageWall = new THREE.Mesh(new THREE.BoxGeometry(HALL.width, HALL.height, 0.5), hallWallMat);
        stageWall.position.set(0, HALL.height / 2, -HALL.length / 2);
        scene.add(stageWall);

        const entryWall = new THREE.Mesh(new THREE.BoxGeometry(HALL.width, HALL.height, 0.5), hallWallMat);
        entryWall.position.set(0, HALL.height / 2, HALL.length / 2);
        scene.add(entryWall);

        const sideWallGeo = new THREE.BoxGeometry(0.5, HALL.height, HALL.length);
        const leftWall = new THREE.Mesh(sideWallGeo, hallWallMat);
        leftWall.position.set(-HALL.width / 2, HALL.height / 2, 0);
        scene.add(leftWall);

        const rightWall = new THREE.Mesh(sideWallGeo, hallWallMat);
        rightWall.position.set(HALL.width / 2, HALL.height / 2, 0);
        scene.add(rightWall);

        const pilasterMat = new THREE.MeshStandardMaterial({ color: 0xc9a86a, metalness: 0.75, roughness: 0.3 });
        const sconceBulbMat = new THREE.MeshBasicMaterial({ color: 0xffdf9e });

        for (let z = -16; z <= 16; z += 8) {
          [-1, 1].forEach((side) => {
            const pilaster = new THREE.Mesh(new THREE.BoxGeometry(0.45, HALL.height - 1, 0.7), pilasterMat);
            pilaster.position.set(side * (HALL.width / 2 - 0.35), HALL.height / 2, z);
            scene.add(pilaster);

            const sconce = new THREE.Mesh(new THREE.SphereGeometry(0.24, 12, 12), sconceBulbMat);
            sconce.position.set(side * (HALL.width / 2 - 0.75), 5.2, z);
            scene.add(sconce);
          });
        }
      }

      function buildLightingRig() {
        ambientLight = new THREE.AmbientLight(0xffd6a3, 0.65);
        scene.add(ambientLight);

        hemiLight = new THREE.HemisphereLight(0xfff1d6, 0x1a1622, 0.55);
        scene.add(hemiLight);

        stageSpotLeft = new THREE.SpotLight(0xffdfad, 1.85, 42, Math.PI / 5, 0.45, 1);
        stageSpotLeft.position.set(-7, 11.5, -5);
        stageSpotLeft.target.position.set(0, 2.5, -15);
        scene.add(stageSpotLeft, stageSpotLeft.target);

        stageSpotRight = new THREE.SpotLight(0xffdfad, 1.85, 42, Math.PI / 5, 0.45, 1);
        stageSpotRight.position.set(7, 11.5, -5);
        stageSpotRight.target.position.set(0, 2.5, -15);
        scene.add(stageSpotRight, stageSpotRight.target);
      }

      function clearGroup(grp) {
        while (grp.children.length > 0) {
          const obj = grp.children[0];
          grp.remove(obj);
        }
      }

      function syncWithState(state) {
        if (!isInitialized) return;

        const palette = COLOR_PALETTES[state.colorTheme] || COLOR_PALETTES['Royal Gold'];
        const lightCfg = LIGHTING_CONFIGS[state.lightingMood] || LIGHTING_CONFIGS['Warm Candlelight'];

        ambientLight.color.setHex(lightCfg.ambient);
        ambientLight.intensity = lightCfg.ambientInt;
        stageSpotLeft.color.setHex(lightCfg.spot);
        stageSpotRight.color.setHex(lightCfg.spot);
        stageSpotLeft.intensity = state.spotlights === 'Theatrical Beams On' ? lightCfg.spotInt : lightCfg.spotInt * 0.45;
        stageSpotRight.intensity = state.spotlights === 'Theatrical Beams On' ? lightCfg.spotInt : lightCfg.spotInt * 0.45;
        scene.fog.color.setHex(lightCfg.fog);

        const aisle = scene.getObjectByName('aisleRunner');
        if (aisle) aisle.material.color.setHex(palette.fabric);

        clearGroup(stageGroup);
        const stageWidth = state.stageSize === 'Compact' ? 12 : state.stageSize === 'Monumental' ? 22 : 16.5;
        const stageDepth = state.stageSize === 'Compact' ? 6 : state.stageSize === 'Monumental' ? 8.5 : 7.2;
        const stageHeight = 1.15;
        const stageZ = -15.5;

        stagePlatformMat = new THREE.MeshStandardMaterial({
          color: palette.secondary,
          roughness: 0.35,
          metalness: 0.25
        });
        const trimMat = new THREE.MeshStandardMaterial({
          color: palette.primary,
          roughness: 0.25,
          metalness: 0.8
        });

        const deck = new THREE.Mesh(new THREE.BoxGeometry(stageWidth, stageHeight, stageDepth), stagePlatformMat);
        deck.position.set(0, stageHeight / 2, stageZ);
        stageGroup.add(deck);

        const fascia = new THREE.Mesh(new THREE.BoxGeometry(stageWidth + 0.16, 0.22, stageDepth + 0.16), trimMat);
        fascia.position.set(0, stageHeight - 0.1, stageZ);
        stageGroup.add(fascia);

        for (let s = 0; s < 3; s++) {
          const step = new THREE.Mesh(
            new THREE.BoxGeometry(4.4, stageHeight / 3, 0.55),
            stagePlatformMat
          );
          step.position.set(0, ((3 - s) * stageHeight) / 6, stageZ + stageDepth / 2 + 0.28 + s * 0.5);
          stageGroup.add(step);
        }

        if (state.stageType === 'Modern Fashion Runway') {
          const runway = new THREE.Mesh(new THREE.BoxGeometry(3.2, stageHeight * 0.92, 13), stagePlatformMat);
          runway.position.set(0, (stageHeight * 0.92) / 2, stageZ + stageDepth / 2 + 6.5);
          stageGroup.add(runway);
        }

        if (state.stageType === 'Royal Mandap Pavilion') {
          const pOffsets = [
            [-3.4, -2.2], [3.4, -2.2],
            [-3.4, 2.2], [3.4, 2.2]
          ];
          pOffsets.forEach(([px, pz]) => {
            const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.3, 5.2, 16), trimMat);
            pillar.position.set(px, stageHeight + 2.6, stageZ + pz);
            stageGroup.add(pillar);
          });
          const canopy = new THREE.Mesh(new THREE.BoxGeometry(7.6, 0.45, 5.2), trimMat);
          canopy.position.set(0, stageHeight + 5.3, stageZ);
          stageGroup.add(canopy);
        }

        const bdWidth = stageWidth * 0.84;
        const bdHeight = 6.2;
        const bdZ = stageZ - stageDepth / 2 + 0.45;

        const bdFrame = new THREE.Mesh(new THREE.BoxGeometry(bdWidth + 0.5, bdHeight + 0.5, 0.35), trimMat);
        bdFrame.position.set(0, stageHeight + bdHeight / 2, bdZ);
        stageGroup.add(bdFrame);

        backdropMat = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          roughness: 0.45,
          metalness: 0.05
        });
        backdropMesh = new THREE.Mesh(new THREE.PlaneGeometry(bdWidth, bdHeight), backdropMat);
        backdropMesh.position.set(0, stageHeight + bdHeight / 2, bdZ + 0.2);
        stageGroup.add(backdropMesh);

        loadSafeTexture(state.designImage, state.designTitle, (tex) => {
          backdropMat.map = tex;
          backdropMat.needsUpdate = true;
        });

        if (state.backdropStyle === 'Architectural Arches' || state.backdropStyle === 'Silk Drapery & Columns') {
          [-1, 1].forEach((side) => {
            const archPanel = new THREE.Mesh(new THREE.BoxGeometry(2.4, 5.6, 0.3), stagePlatformMat);
            archPanel.position.set(side * (bdWidth / 2 + 1.5), stageHeight + 2.8, bdZ + 0.4);
            archPanel.rotation.y = -side * 0.22;
            stageGroup.add(archPanel);
          });
        }

        const sofaBase = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.65, 1.1), trimMat);
        sofaBase.position.set(0, stageHeight + 0.32, stageZ + 0.6);
        const sofaBack = new THREE.Mesh(new THREE.BoxGeometry(2.8, 1.35, 0.3), new THREE.MeshStandardMaterial({ color: palette.secondary, roughness: 0.5 }));
        sofaBack.position.set(0, stageHeight + 0.85, stageZ + 0.15);
        stageGroup.add(sofaBase, sofaBack);

        clearGroup(floralGroup);
        const clusterCount = state.floralDensity === 'Minimal' ? 6 : state.floralDensity === 'Opulent' ? 22 : 13;
        const floralMat = new THREE.MeshStandardMaterial({
          color: palette.floral,
          roughness: 0.65
        });
        const leafMat = new THREE.MeshStandardMaterial({
          color: 0x2d5a36,
          roughness: 0.75
        });

        for (let i = 0; i < clusterCount; i++) {
          const ratio = clusterCount === 1 ? 0.5 : i / (clusterCount - 1);
          const fx = (ratio - 0.5) * (stageWidth - 1.2);
          const fy = stageHeight + 0.35 + Math.sin(ratio * Math.PI) * 0.35;
          const fz = stageZ + stageDepth / 2 - 0.55;

          const cluster = new THREE.Group();
          cluster.position.set(fx, fy, fz);

          const bloom = new THREE.Mesh(new THREE.DodecahedronGeometry(0.45 + (i % 3) * 0.1, 1), floralMat);
          const foliage = new THREE.Mesh(new THREE.DodecahedronGeometry(0.55, 0), leafMat);
          foliage.position.y = -0.15;
          cluster.add(bloom, foliage);
          floralGroup.add(cluster);
        }

        clearGroup(chandelierGroup);
        const chandelierMat = new THREE.MeshStandardMaterial({
          color: state.hangingDecor === 'Suspended Floral Clouds' ? palette.floral : 0xffe9b8,
          emissive: state.hangingDecor === 'Suspended Floral Clouds' ? 0x221510 : 0xffaa33,
          emissiveIntensity: 0.65,
          roughness: 0.25
        });

        [-8, 0, 8].forEach((cz) => {
          [-4.5, 4.5].forEach((cx) => {
            const chand = new THREE.Group();
            chand.position.set(cx, HALL.height - 1.8, cz);

            const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.8, 8), trimMat);
            rod.position.y = 0.9;
            const tier1 = new THREE.Mesh(new THREE.TorusGeometry(0.95, 0.12, 10, 24), chandelierMat);
            tier1.rotation.x = Math.PI / 2;
            const tier2 = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.1, 10, 20), chandelierMat);
            tier2.rotation.x = Math.PI / 2;
            tier2.position.y = -0.45;

            chand.add(rod, tier1, tier2);
            chandelierGroup.add(chand);
          });
        });

        clearGroup(seatingGroup);
        const linenMat = new THREE.MeshStandardMaterial({
          color: state.tableDecor.includes('Velvet') ? palette.fabric : palette.secondary,
          roughness: 0.55
        });
        const chairMat = new THREE.MeshStandardMaterial({
          color: palette.primary,
          metalness: 0.65,
          roughness: 0.35
        });
        const centerGlowMat = new THREE.MeshStandardMaterial({
          color: palette.floral,
          emissive: 0xffb347,
          emissiveIntensity: 0.45
        });

        if (state.seatingLayout === 'Ceremony Theatre Rows') {
          for (let row = 0; row < 6; row++) {
            const rz = -7.5 + row * 2.4;
            [-1, 1].forEach((side) => {
              for (let col = 0; col < 5; col++) {
                const cx = side * (2.6 + col * 1.45);
                const chair = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.95, 0.65), chairMat);
                chair.position.set(cx, 0.48, rz);
                seatingGroup.add(chair);
              }
            });
          }
        } else if (state.seatingLayout === 'VIP Sofa & Lounge Pods') {
          for (let row = 0; row < 3; row++) {
            const lz = -6 + row * 5.2;
            [-7.2, 7.2].forEach((lx) => {
              const pod = new THREE.Group();
              pod.position.set(lx, 0, lz);

              const sofa = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.85, 1.2), linenMat);
              sofa.position.set(0, 0.42, 1.2);
              const coffeeTable = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.0, 0.55, 20), trimMat);
              coffeeTable.position.set(0, 0.28, -0.4);
              const centerpiece = new THREE.Mesh(new THREE.SphereGeometry(0.32, 12, 12), centerGlowMat);
              centerpiece.position.set(0, 0.72, -0.4);

              pod.add(sofa, coffeeTable, centerpiece);
              seatingGroup.add(pod);
            });
          }
        } else {
          const rows = [-6.5, -0.5, 5.5];
          const cols = [-9.5, -4.5, 4.5, 9.5];

          rows.forEach((tz) => {
            cols.forEach((tx) => {
              const tableGrp = new THREE.Group();
              tableGrp.position.set(tx, 0, tz);

              const table = new THREE.Mesh(new THREE.CylinderGeometry(1.35, 1.42, 0.85, 24), linenMat);
              table.position.y = 0.425;
              tableGrp.add(table);

              const cpHeight = state.tableDecor.includes('Candelabra') ? 0.95 : 0.45;
              const cp = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.35, cpHeight, 12), centerGlowMat);
              cp.position.y = 0.85 + cpHeight / 2;
              tableGrp.add(cp);

              for (let c = 0; c < 6; c++) {
                const angle = (c / 6) * Math.PI * 2;
                const chair = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.9, 0.52), chairMat);
                chair.position.set(Math.cos(angle) * 1.72, 0.45, Math.sin(angle) * 1.72);
                chair.lookAt(0, 0.45, 0);
                tableGrp.add(chair);
              }

              seatingGroup.add(tableGrp);
            });
          });
        }

        clearGroup(entranceGroup);
        const entZ = 14.5;
        const archMat = state.entranceStyle.includes('Floral') ? floralMat : trimMat;
        [-2.3, 2.3].forEach((ex) => {
          const post = new THREE.Mesh(new THREE.BoxGeometry(0.85, 5.2, 0.85), archMat);
          post.position.set(ex, 2.6, entZ);
          entranceGroup.add(post);
        });
        const lintel = new THREE.Mesh(new THREE.BoxGeometry(5.6, 0.95, 0.95), archMat);
        lintel.position.set(0, 5.4, entZ);
        entranceGroup.add(lintel);

        clearGroup(spotlightBeamsGroup);
        if (state.spotlights === 'Theatrical Beams On') {
          const beamMat = new THREE.MeshBasicMaterial({
            color: lightCfg.spot,
            transparent: true,
            opacity: 0.065,
            depthWrite: false,
            side: THREE.DoubleSide
          });
          [-1, 1].forEach((side) => {
            const coneGeo = new THREE.ConeGeometry(3.4, 15, 24, 1, true);
            const cone = new THREE.Mesh(coneGeo, beamMat);
            cone.position.set(side * 3.8, 6.5, -10.5);
            cone.rotation.x = 0.42;
            cone.rotation.z = side * 0.25;
            spotlightBeamsGroup.add(cone);
          });
        }
      }

      function setCameraPreset(presetKey) {
        const preset = CAMERA_PRESETS[presetKey];
        if (!preset || !isInitialized) return;

        document.getElementById('venue-hud-status').textContent = `View: ${preset.label}`;

        if (window.gsap) {
          gsap.to(camera.position, {
            x: preset.pos[0],
            y: preset.pos[1],
            z: preset.pos[2],
            duration: 1.15,
            ease: 'power3.inOut'
          });
          gsap.to(controls.target, {
            x: preset.target[0],
            y: preset.target[1],
            z: preset.target[2],
            duration: 1.15,
            ease: 'power3.inOut'
          });
        } else {
          camera.position.set(...preset.pos);
          controls.target.set(...preset.target);
        }
      }

      function enforceVenueBoundaries() {
        const margin = 1.4;
        camera.position.x = THREE.MathUtils.clamp(camera.position.x, -HALL.width / 2 + margin, HALL.width / 2 - margin);
        camera.position.z = THREE.MathUtils.clamp(camera.position.z, -HALL.length / 2 + 2.5, HALL.length / 2 - margin);
        camera.position.y = THREE.MathUtils.clamp(camera.position.y, 1.35, HALL.height - margin);
      }

      function handleResize() {
        if (!isInitialized || !wrapperEl) return;
        const w = wrapperEl.clientWidth;
        const h = wrapperEl.clientHeight;
        if (w === 0 || h === 0) return;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }

      function animate() {
        requestAnimationFrame(animate);
        if (!isInitialized) return;
        controls.update();
        enforceVenueBoundaries();
        renderer.render(scene, camera);
      }

      return {
        init,
        syncWithState,
        setCameraPreset,
        handleResize
      };
    })();

    /**
     * =========================================================================
     * 7. BUDGET CALCULATOR & UI SYNCHRONISATION
     * =========================================================================
     */
    function calculateIndicativeBudget(state) {
      const pkg = STUDIO_CONFIG.packages[state.packageTier] || STUDIO_CONFIG.packages.signature;
      let total = pkg.basePrice + state.guestCount * pkg.perGuest;
      total += STUDIO_CONFIG.modifiers.stageSize[state.stageSize] || 0;
      total += STUDIO_CONFIG.modifiers.floralDensity[state.floralDensity] || 0;
      total += STUDIO_CONFIG.modifiers.hangingDecor[state.hangingDecor] || 0;
      return Math.max(4500, total);
    }

    function formatCurrency(val) {
      return `${STUDIO_CONFIG.currencySymbol}${val.toLocaleString('en-US')}`;
    }

    function buildSummaryText(state) {
      const pkg = STUDIO_CONFIG.packages[state.packageTier];
      const est = formatCurrency(calculateIndicativeBudget(state));
      return [
        `🎯Event Discipline: ${state.eventCategory}`,
        `🎨Reference Design: ${state.designTitle}`,
        `🏟️Stage: ${state.stageType} (${state.stageSize}) | Backdrop: ${state.backdropStyle}`,
        `🌸Florals & Decor: ${state.floralDensity} ${state.decorStyle} | ${state.hangingDecor}`,
        `💡Lighting & Palette: ${state.lightingMood} (${state.spotlights}) | Theme: ${state.colorTheme}`,
        `🪑Seating & Entrance: ${state.seatingLayout} (${state.tableDecor}) | ${state.entranceStyle}`,
        `👥Guest Count: ${state.guestCount} Guests | Tier: ${pkg.name}`,
        `💰Indicative Studio Estimate: ${est} (Subject to venue survey)`
      ].join('\n');
    }

    function syncAllUI() {
      const est = formatCurrency(calculateIndicativeBudget(studioState));
      const pkg = STUDIO_CONFIG.packages[studioState.packageTier];

      document.getElementById('studio-active-thumb').src = studioState.designImage;
      document.getElementById('studio-active-design-name').textContent = studioState.designTitle;
      document.getElementById('overlay-photo-title').textContent = studioState.designTitle;
      document.getElementById('overlay-photo-img').src = studioState.designImage;

      document.getElementById('summary-guest-count-label').textContent = studioState.guestCount;
      document.getElementById('guest-count-slider').value = studioState.guestCount;
      document.getElementById('package-tier-select').value = studioState.packageTier;
      document.getElementById('pkg-guest-echo').textContent = `${studioState.guestCount} guests`;
      document.getElementById('live-budget-display').textContent = est;

      const pillsEl = document.getElementById('live-summary-pills');
      const tags = [
        studioState.eventCategory,
        `${studioState.stageSize} Stage`,
        studioState.colorTheme,
        studioState.lightingMood,
        studioState.seatingLayout
      ];
      pillsEl.innerHTML = tags
        .map((t) => `<span class="px-2.5 py-1 rounded-md bg-obsidian border border-ivory/15 text-ivory/85">${t}</span>`)
        .join('');

      document.querySelectorAll('.opt-btn').forEach((btn) => {
        const key = btn.dataset.stateKey;
        const val = btn.dataset.stateVal;
        const isActive = studioState[key] === val;
        btn.classList.toggle('active', isActive);
        btn.classList.toggle('border-gold', isActive);
        btn.classList.toggle('bg-gold/15', isActive);
        btn.classList.toggle('text-ivory', isActive);
        btn.classList.toggle('font-medium', isActive);
        btn.classList.toggle('border-ivory/15', !isActive);
        btn.classList.toggle('bg-obsidian/60', !isActive);
        btn.classList.toggle('text-ivory/80', !isActive);
      });

      renderPackagesGrid();

      const briefList = document.getElementById('enquiry-brief-list');
      briefList.innerHTML = `
        <div><dt class="text-stone">Category</dt><dd class="text-ivory font-medium">${studioState.eventCategory}</dd></div>
        <div><dt class="text-stone">Reference Style</dt><dd class="text-ivory font-medium">${studioState.designTitle}</dd></div>
        <div><dt class="text-stone">Stage &amp; Size</dt><dd class="text-ivory">${studioState.stageType} (${studioState.stageSize})</dd></div>
        <div><dt class="text-stone">Colour Palette</dt><dd class="text-ivory">${studioState.colorTheme}</dd></div>
        <div><dt class="text-stone">Lighting Mood</dt><dd class="text-ivory">${studioState.lightingMood}</dd></div>
        <div><dt class="text-stone">Seating Layout</dt><dd class="text-ivory">${studioState.seatingLayout}</dd></div>
        <div><dt class="text-stone">Production Tier</dt><dd class="text-gold font-medium">${pkg.name}</dd></div>
        <div><dt class="text-stone">Indicative Estimate</dt><dd class="text-gold font-semibold">${est}</dd></div>
      `;

      const catSelect = document.getElementById('cust-category');
      if (catSelect) catSelect.value = studioState.eventCategory;
      document.getElementById('cust-guests').value = studioState.guestCount;
      document.getElementById('cust-budget').value = `${est} (${pkg.name} — Indicative)`;
      document.getElementById('cust-notes').value = buildSummaryText(studioState);

      VenueHall3D.syncWithState(studioState);

      try {
        localStorage.setItem(STORAGE_KEYS.ACTIVE_STATE, JSON.stringify(studioState));
      } catch (e) {}
    }

    /**
     * =========================================================================
     * 8. RENDER CATEGORIES, GALLERY, PACKAGES & SAVED DESIGNS
     * =========================================================================
     */
    function renderCategoriesGrid() {
      const grid = document.getElementById('categories-grid');
      grid.innerHTML = EVENT_CATEGORIES.map(
        (cat) => `
        <article data-cat-id="${cat.id}" class="category-card studio-card rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between group">
          <div>
            <div class="relative h-52 overflow-hidden bg-obsidian">
              <img src="${cat.image}" alt="${cat.title}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div class="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-black/25"></div>
              <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-obsidian/80 backdrop-blur-md border border-ivory/15 text-[10px] font-medium uppercase tracking-[0.16em] text-gold">
                ${cat.tag}
              </span>
            </div>
            <div class="p-5">
              <h3 class="text-xl font-semibold text-ivory group-hover:text-gold transition-colors">${cat.title}</h3>
              <p class="mt-2 text-xs text-stone leading-relaxed line-clamp-2">${cat.description}</p>
            </div>
          </div>
          <div class="px-5 pb-5 pt-2 flex items-center justify-between text-[11px] uppercase tracking-wider text-gold font-semibold">
            <span>Inspect Styles &amp; 3D</span>
            <span class="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </article>
      `
      ).join('');

      grid.querySelectorAll('.category-card').forEach((card) => {
        card.addEventListener('click', () => openCategoryModal(card.dataset.catId));
      });
    }

    function openCategoryModal(catId) {
      const cat = EVENT_CATEGORIES.find((c) => c.id === catId);
      if (!cat) return;

      document.getElementById('cat-modal-hero-img').src = cat.image;
      document.getElementById('cat-modal-tag').textContent = cat.tag;
      document.getElementById('cat-modal-title').textContent = cat.title;
      document.getElementById('cat-modal-desc').textContent = cat.description;

      document.getElementById('cat-modal-specs').innerHTML = `
        <div><span class="text-stone block">Typical Capacity</span><strong class="text-ivory font-semibold">${cat.specs.capacity}</strong></div>
        <div><span class="text-stone block">Rigging &amp; Setup</span><strong class="text-ivory font-semibold">${cat.specs.setupTime}</strong></div>
        <div><span class="text-stone block">Spatial Footprint</span><strong class="text-ivory font-semibold">${cat.specs.footprint}</strong></div>
      `;

      const stylesEl = document.getElementById('cat-modal-styles');
      stylesEl.innerHTML = cat.styles
        .map(
          (st, idx) => `
          <div class="p-3 rounded-xl bg-obsidian border border-ivory/15 hover:border-gold/50 transition-all">
            <img src="${st.img}" alt="${st.name}" class="w-full h-28 object-cover rounded-lg mb-2.5" />
            <p class="text-xs font-semibold text-ivory">${st.name}</p>
            <button type="button" data-style-idx="${idx}" class="cat-style-apply-btn touch-target mt-2.5 w-full py-2 rounded-lg bg-surface hover:bg-gold hover:text-obsidian text-[11px] text-gold font-semibold uppercase tracking-wider transition-all">
              Load in 3D Hall
            </button>
          </div>
        `
        )
        .join('');

      stylesEl.querySelectorAll('.cat-style-apply-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          const st = cat.styles[Number(btn.dataset.styleIdx)];
          studioState.eventCategory = cat.title;
          studioState.designTitle = st.name;
          studioState.designImage = st.img;
          studioState.colorTheme = cat.presetTheme;
          studioState.stageType = cat.presetStage;
          syncAllUI();
          closeCategoryModal();
          document.getElementById('venue-studio-section').scrollIntoView({ behavior: 'smooth' });
          showToast(`Loaded "${st.name}" into 3D Venue Hall`);
        });
      });

      document.getElementById('cat-modal-launch-3d-btn').onclick = () => {
        studioState.eventCategory = cat.title;
        studioState.designTitle = cat.styles[0].name;
        studioState.designImage = cat.image;
        studioState.colorTheme = cat.presetTheme;
        studioState.stageType = cat.presetStage;
        syncAllUI();
        closeCategoryModal();
        document.getElementById('venue-studio-section').scrollIntoView({ behavior: 'smooth' });
        showToast(`Configured 3D Hall for ${cat.title}`);
      };

      document.getElementById('category-modal').classList.remove('hidden');
    }

    function closeCategoryModal() {
      document.getElementById('category-modal').classList.add('hidden');
    }

    function renderDesignGallery(filter = 'all') {
      const grid = document.getElementById('design-gallery-grid');
      const items = filter === 'all' ? DESIGN_GALLERY_ITEMS : DESIGN_GALLERY_ITEMS.filter((i) => i.filter === filter);

      grid.innerHTML = items
        .map(
          (item) => `
          <div class="studio-card rounded-2xl overflow-hidden flex flex-col justify-between group">
            <div>
              <div class="relative h-60 overflow-hidden bg-obsidian cursor-pointer gallery-open-trigger" data-item-id="${item.id}">
                <img src="${item.image}" alt="${item.title}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div class="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
                <span class="absolute top-3 left-3 px-3 py-1 rounded-full bg-obsidian/85 border border-ivory/15 text-[10px] font-medium uppercase tracking-[0.16em] text-gold">
                  ${item.categoryLabel}
                </span>
                <span class="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-obsidian/85 text-[10px] text-ivory/90 border border-ivory/15">
                  Click to Inspect
                </span>
              </div>
              <div class="p-5">
                <h3 class="text-xl font-semibold text-ivory">${item.title}</h3>
                <p class="mt-2 text-xs text-stone leading-relaxed">${item.description}</p>
              </div>
            </div>
            <div class="px-5 pb-5 pt-2 flex items-center gap-2.5">
              <button type="button" data-item-id="${item.id}" class="gallery-open-trigger touch-target flex-1 py-2.5 px-3 rounded-xl border border-ivory/20 hover:border-gold text-xs text-ivory font-medium transition-all">
                View Details
              </button>
              <button type="button" data-item-id="${item.id}" class="gallery-customise-trigger touch-target flex-1 py-2.5 px-3 rounded-xl bg-gold hover:bg-goldLight text-obsidian text-xs font-bold uppercase tracking-wider transition-all">
                Customise 3D
              </button>
            </div>
          </div>
        `
        )
        .join('');

      grid.querySelectorAll('.gallery-open-trigger').forEach((el) => {
        el.addEventListener('click', () => openGalleryLightbox(el.dataset.itemId));
      });

      grid.querySelectorAll('.gallery-customise-trigger').forEach((btn) => {
        btn.addEventListener('click', () => applyGalleryDesignTo3D(btn.dataset.itemId));
      });
    }

    function applyGalleryDesignTo3D(itemId) {
      const item = DESIGN_GALLERY_ITEMS.find((i) => i.id === itemId);
      if (!item) return;

      studioState.designTitle = item.title;
      studioState.designImage = item.image;
      studioState.colorTheme = item.palette;
      studioState.stageType = item.stageType;
      studioState.lightingMood = item.lighting;
      syncAllUI();

      document.getElementById('gallery-lightbox-modal').classList.add('hidden');
      document.getElementById('venue-studio-section').scrollIntoView({ behavior: 'smooth' });
      showToast(`Applied "${item.title}" to 3D Venue Hall`);
    }

    function openGalleryLightbox(itemId) {
      const item = DESIGN_GALLERY_ITEMS.find((i) => i.id === itemId);
      if (!item) return;

      document.getElementById('lightbox-img').src = item.image;
      document.getElementById('lightbox-category').textContent = item.categoryLabel;
      document.getElementById('lightbox-title').textContent = item.title;
      document.getElementById('lightbox-desc').textContent = item.description;
      document.getElementById('lightbox-meta').innerHTML = `
        <div class="flex justify-between gap-2"><span class="text-stone">Spatial Scale:</span><span class="text-ivory text-right">${item.dimensions}</span></div>
        <div class="flex justify-between gap-2"><span class="text-stone">Stage Architecture:</span><span class="text-ivory text-right">${item.stageType}</span></div>
        <div class="flex justify-between gap-2"><span class="text-stone">Signature Palette:</span><span class="text-gold text-right">${item.palette}</span></div>
        <div class="flex justify-between gap-2"><span class="text-stone">Lighting Profile:</span><span class="text-ivory text-right">${item.lighting}</span></div>
      `;
      document.getElementById('lightbox-apply-3d-btn').onclick = () => applyGalleryDesignTo3D(item.id);
      document.getElementById('gallery-lightbox-modal').classList.remove('hidden');
    }

    function renderPackagesGrid() {
      const grid = document.getElementById('packages-grid');
      if (!grid) return;

      grid.innerHTML = Object.values(STUDIO_CONFIG.packages)
        .map((pkg) => {
          const isSelected = studioState.packageTier === pkg.id;
          const indicativePrice = pkg.basePrice + studioState.guestCount * pkg.perGuest;
          return `
          <div class="rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all ${
            isSelected
              ? 'bg-surface border-2 border-gold shadow-2xl shadow-gold/10'
              : 'bg-surface/80 border border-ivory/15 hover:border-gold/40'
          }">
            <div>
              <div class="flex items-center justify-between gap-2 mb-3">
                <span class="text-xs uppercase tracking-[0.16em] text-gold font-semibold">${pkg.name}</span>
                ${
                  pkg.recommended
                    ? '<span class="px-2.5 py-0.5 rounded-full bg-gold/20 text-gold text-[10px] font-bold uppercase">Most Commissioned</span>'
                    : ''
                }
              </div>
              <div class="my-4">
                <span class="text-3xl sm:text-4xl text-ivory font-semibold">${formatCurrency(indicativePrice)}</span>
                <span class="text-xs text-stone block mt-1">Indicative baseline for ${studioState.guestCount} guests</span>
              </div>
              <p class="text-xs text-ivory/80 leading-relaxed pb-5 border-b border-ivory/10">${pkg.tagline}</p>
              <ul class="mt-5 space-y-2.5 text-xs text-ivory/85">
                ${pkg.features
                  .map(
                    (f) => `
                  <li class="flex items-start gap-2">
                    <span class="text-gold mt-0.5 shrink-0">✦</span>
                    <span>${f}</span>
                  </li>
                `
                  )
                  .join('')}
              </ul>
            </div>

            <button type="button" data-pkg-id="${pkg.id}" class="select-package-btn touch-target mt-7 w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-[0.14em] transition-all ${
              isSelected
                ? 'bg-gold text-obsidian'
                : 'border border-gold/50 text-gold hover:bg-gold hover:text-obsidian'
            }">
              ${isSelected ? 'Selected in Studio' : 'Select Production Tier'}
            </button>
          </div>
        `;
        })
        .join('');

      grid.querySelectorAll('.select-package-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          studioState.packageTier = btn.dataset.pkgId;
          syncAllUI();
          showToast(`Updated package to ${STUDIO_CONFIG.packages[studioState.packageTier].name}`);
        });
      });
    }

    /**
     * =========================================================================
     * 9. LOCALSTORAGE SAVED DESIGNS & TOAST FEEDBACK
     * =========================================================================
     */
    function getSavedDesigns() {
      try {
        return JSON.parse(localStorage.getItem(STORAGE_KEYS.SAVED_DESIGNS) || '[]');
      } catch (e) {
        return [];
      }
    }

    function saveCurrentDesignToStorage() {
      const saved = getSavedDesigns();
      const entry = {
        id: `DES-${Date.now().toString().slice(-5)}`,
        savedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        estimate: formatCurrency(calculateIndicativeBudget(studioState)),
        state: { ...studioState }
      };
      saved.unshift(entry);
      localStorage.setItem(STORAGE_KEYS.SAVED_DESIGNS, JSON.stringify(saved.slice(0, 12)));
      renderSavedDesignsDrawer();
      showToast('Event configuration saved to your Studio Archive.');
    }

    function renderSavedDesignsDrawer() {
      const saved = getSavedDesigns();
      document.getElementById('saved-count-badge').textContent = saved.length;
      const listEl = document.getElementById('saved-designs-list');

      if (saved.length === 0) {
        listEl.innerHTML = `
          <div class="p-6 rounded-xl bg-obsidian/70 border border-ivory/10 text-center text-xs text-stone leading-relaxed">
            No saved event designs yet. Customise your stage, lighting, and seating in the 3D Event Hall and click "Save Design".
          </div>
        `;
        return;
      }

      listEl.innerHTML = saved
        .map(
          (item, idx) => `
          <div class="p-4 rounded-xl bg-obsidian border border-ivory/15 space-y-2.5">
            <div class="flex items-center gap-3">
              <img src="${item.state.designImage}" alt="" class="w-12 h-12 rounded-lg object-cover border border-gold/30 shrink-0" />
              <div class="flex-1 min-w-0">
                <span class="text-[10px] text-gold uppercase tracking-wider block">${item.id} • ${item.savedAt}</span>
                <p class="text-xs font-semibold text-ivory truncate">${item.state.designTitle}</p>
                <p class="text-[11px] text-stone">${item.state.eventCategory} • ${item.estimate}</p>
              </div>
            </div>
            <div class="flex items-center gap-2 pt-1">
              <button type="button" data-load-idx="${idx}" class="load-saved-btn touch-target flex-1 py-2 rounded-lg bg-gold text-obsidian text-[11px] font-bold uppercase tracking-wider">
                Load into 3D Hall
              </button>
              <button type="button" data-del-idx="${idx}" class="del-saved-btn touch-target px-3 py-2 rounded-lg border border-ivory/15 text-stone hover:text-red-300 text-[11px]">
                Delete
              </button>
            </div>
          </div>
        `
        )
        .join('');

      listEl.querySelectorAll('.load-saved-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          const item = saved[Number(btn.dataset.loadIdx)];
          if (!item) return;
          studioState = { ...DEFAULT_STATE, ...item.state };
          syncAllUI();
          document.getElementById('saved-designs-drawer').classList.add('hidden');
          document.getElementById('venue-studio-section').scrollIntoView({ behavior: 'smooth' });
          showToast(`Loaded saved configuration ${item.id}`);
        });
      });

      listEl.querySelectorAll('.del-saved-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          saved.splice(Number(btn.dataset.delIdx), 1);
          localStorage.setItem(STORAGE_KEYS.SAVED_DESIGNS, JSON.stringify(saved));
          renderSavedDesignsDrawer();
        });
      });
    }

    let toastTimeout;
    function showToast(msg) {
      const toast = document.getElementById('studio-toast');
      document.getElementById('studio-toast-text').textContent = msg;
      toast.classList.remove('translate-y-24', 'opacity-0');
      clearTimeout(toastTimeout);
      toastTimeout = setTimeout(() => {
        toast.classList.add('translate-y-24', 'opacity-0');
      }, 3200);
    }

    /**
     * =========================================================================
     * 10. EVENT LISTENERS & APPLICATION BOOTSTRAP
     * =========================================================================
     */
    window.addEventListener('DOMContentLoaded', () => {
      try {
        const storedActive = JSON.parse(localStorage.getItem(STORAGE_KEYS.ACTIVE_STATE));
        if (storedActive && typeof storedActive === 'object') {
          studioState = { ...DEFAULT_STATE, ...storedActive };
        }
      } catch (e) {}

      const catSelect = document.getElementById('cust-category');
      catSelect.innerHTML = EVENT_CATEGORIES.map((c) => `<option value="${c.title}">${c.title}</option>`).join('');
      document.getElementById('display-studio-phone').textContent = STUDIO_CONFIG.contactPhoneDisplay;

      renderCategoriesGrid();
      renderDesignGallery('all');
      renderSavedDesignsDrawer();

      initHeroScroll3DScene();
      VenueHall3D.init();
      syncAllUI();

      // Accessible Mobile Menu Toggle (Hamburger <-> Close Icon)
      const mobileMenuBtn = document.getElementById('mobile-menu-btn');
      const mobileMenuPanel = document.getElementById('mobile-menu-panel');
      const iconOpen = document.getElementById('menu-icon-open');
      const iconClose = document.getElementById('menu-icon-close');

      function setMobileMenuState(isOpen) {
        mobileMenuPanel.classList.toggle('hidden', !isOpen);
        iconOpen.classList.toggle('hidden', isOpen);
        iconClose.classList.toggle('hidden', !isOpen);
        mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
      }

      mobileMenuBtn.addEventListener('click', () => {
        const isCurrentlyHidden = mobileMenuPanel.classList.contains('hidden');
        setMobileMenuState(isCurrentlyHidden);
      });

      document.querySelectorAll('.mobile-nav-link').forEach((link) => {
        link.addEventListener('click', () => setMobileMenuState(false));
      });

      // Gallery Filter Buttons
      document.querySelectorAll('.gallery-filter-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.gallery-filter-btn').forEach((b) => {
            b.classList.remove('active', 'bg-gold', 'text-obsidian', 'font-semibold');
            b.classList.add('bg-surface', 'text-ivory/80', 'font-medium');
          });
          btn.classList.add('active', 'bg-gold', 'text-obsidian', 'font-semibold');
          btn.classList.remove('bg-surface', 'text-ivory/80', 'font-medium');
          renderDesignGallery(btn.dataset.filter);
        });
      });

      // Mobile Gallery Filter Navigation
      const galleryFilterBar = document.getElementById('gallery-filter-bar');
      const galleryFilterPrevBtn = document.getElementById('gallery-filter-prev-btn');
      const galleryFilterNextBtn = document.getElementById('gallery-filter-next-btn');

      function updateGalleryFilterNavigation() {
        const maxScrollLeft = galleryFilterBar.scrollWidth - galleryFilterBar.clientWidth;
        galleryFilterPrevBtn.disabled = galleryFilterBar.scrollLeft <= 1;
        galleryFilterNextBtn.disabled = galleryFilterBar.scrollLeft >= maxScrollLeft - 1;
      }

      function scrollGalleryFilters(direction) {
        galleryFilterBar.scrollBy({
          left: direction * Math.max(galleryFilterBar.clientWidth * 0.75, 160),
          behavior: 'smooth'
        });
      }

      galleryFilterPrevBtn.addEventListener('click', () => scrollGalleryFilters(-1));
      galleryFilterNextBtn.addEventListener('click', () => scrollGalleryFilters(1));
      galleryFilterBar.addEventListener('scroll', updateGalleryFilterNavigation, { passive: true });
      window.addEventListener('resize', updateGalleryFilterNavigation);
      updateGalleryFilterNavigation();

      function setupMobileScroller(barId, prevButtonId, nextButtonId) {
        const bar = document.getElementById(barId);
        const prevButton = document.getElementById(prevButtonId);
        const nextButton = document.getElementById(nextButtonId);

        function updateNavigation() {
          const maxScrollLeft = bar.scrollWidth - bar.clientWidth;
          prevButton.disabled = bar.scrollLeft <= 1;
          nextButton.disabled = bar.scrollLeft >= maxScrollLeft - 1;
        }

        function scroll(direction) {
          bar.scrollBy({
            left: direction * Math.max(bar.clientWidth * 0.75, 140),
            behavior: 'smooth'
          });
        }

        prevButton.addEventListener('click', () => scroll(-1));
        nextButton.addEventListener('click', () => scroll(1));
        bar.addEventListener('scroll', updateNavigation, { passive: true });
        window.addEventListener('resize', updateNavigation);
        updateNavigation();
      }

      setupMobileScroller('camera-presets-bar', 'camera-presets-prev-btn', 'camera-presets-next-btn');
      setupMobileScroller('customizer-tabs-bar', 'customizer-tabs-prev-btn', 'customizer-tabs-next-btn');

      // 3D Camera Presets
      document.querySelectorAll('.cam-preset-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.cam-preset-btn').forEach((b) => {
            b.classList.remove('active', 'bg-gold', 'text-obsidian', 'font-semibold');
            b.classList.add('bg-surface', 'text-ivory/80', 'font-medium', 'hover:text-gold');
          });
          btn.classList.add('active', 'bg-gold', 'text-obsidian', 'font-semibold');
          btn.classList.remove('bg-surface', 'text-ivory/80', 'font-medium', 'hover:text-gold');
          VenueHall3D.setCameraPreset(btn.dataset.cam);
        });
      });

      // Level 3 Photographic Reference Overlay Toggle
      const photoOverlay = document.getElementById('level3-photo-overlay');
      document.getElementById('toggle-photo-reference-btn').addEventListener('click', () => {
        photoOverlay.classList.toggle('hidden');
      });
      document.getElementById('close-photo-overlay-btn').addEventListener('click', () => {
        photoOverlay.classList.add('hidden');
      });

      // Customizer Tabs
      document.querySelectorAll('.cust-tab-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.cust-tab-btn').forEach((b) => {
            b.classList.remove('active', 'bg-gold', 'text-obsidian', 'font-semibold');
            b.classList.add('bg-surface', 'text-ivory/75', 'font-medium', 'hover:text-gold');
          });
          btn.classList.add('active', 'bg-gold', 'text-obsidian', 'font-semibold');
          btn.classList.remove('bg-surface', 'text-ivory/75', 'font-medium', 'hover:text-gold');

          const target = btn.dataset.custTab;
          document.querySelectorAll('.cust-panel').forEach((panel) => {
            panel.classList.toggle('hidden', panel.dataset.custPanel !== target);
          });
        });
      });

      // Customizer Option Buttons
      document.querySelectorAll('.opt-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          const key = btn.dataset.stateKey;
          const val = btn.dataset.stateVal;
          studioState[key] = val;
          syncAllUI();
        });
      });

      // Guest Slider & Package Select
      document.getElementById('guest-count-slider').addEventListener('input', (e) => {
        studioState.guestCount = Number(e.target.value);
        syncAllUI();
      });

      document.getElementById('package-tier-select').addEventListener('change', (e) => {
        studioState.packageTier = e.target.value;
        syncAllUI();
      });

      // Sync Enquiry Form Guest Input & Category Back to Studio
      document.getElementById('cust-guests').addEventListener('change', (e) => {
        const val = Math.max(25, Math.min(2000, Number(e.target.value) || 250));
        studioState.guestCount = val;
        syncAllUI();
      });
      document.getElementById('cust-category').addEventListener('change', (e) => {
        studioState.eventCategory = e.target.value;
        syncAllUI();
      });

      // Save & Reset Design Actions
      document.getElementById('save-design-btn').addEventListener('click', saveCurrentDesignToStorage);
      document.getElementById('reset-design-btn').addEventListener('click', () => {
        studioState = { ...DEFAULT_STATE };
        syncAllUI();
        VenueHall3D.setCameraPreset('overview');
        showToast('3D Venue Hall restored to default scenography.');
      });

      // Saved Designs Drawer Controls
      document.getElementById('open-saved-drawer-btn').addEventListener('click', () => {
        renderSavedDesignsDrawer();
        document.getElementById('saved-designs-drawer').classList.remove('hidden');
      });
      document.getElementById('close-saved-drawer-btn').addEventListener('click', () => {
        document.getElementById('saved-designs-drawer').classList.add('hidden');
      });

      // Modal Close Controls
      document.getElementById('close-cat-modal-btn').addEventListener('click', closeCategoryModal);
      document.getElementById('close-lightbox-btn').addEventListener('click', () => {
        document.getElementById('gallery-lightbox-modal').classList.add('hidden');
      });

      // Booking / Quotation / Consultation Submission Logic
      function processEnquirySubmission(submissionMode) {
        const name = document.getElementById('cust-name').value.trim();
        const phone = document.getElementById('cust-phone').value.trim();
        const email = document.getElementById('cust-email').value.trim();
        const date = document.getElementById('cust-date').value;
        const location = document.getElementById('cust-location').value.trim();
        const errorBanner = document.getElementById('form-error-banner');

        if (!name || !phone || !email || !date || !location) {
          errorBanner.textContent = 'Please complete your Name, Phone/WhatsApp, Email, Event Date, and City/Destination before submitting.';
          errorBanner.classList.remove('hidden');
          return;
        }
        errorBanner.classList.add('hidden');

        const refId = `AL-${Date.now().toString().slice(-6)}`;
        const record = {
          refId,
          mode: submissionMode,
          submittedAt: new Date().toISOString(),
          client: {
            name,
            phone,
            email,
            date,
            location,
            venuePref: document.getElementById('cust-venue-pref').value,
            guests: document.getElementById('cust-guests').value
          },
          design: { ...studioState },
          indicativeEstimate: formatCurrency(calculateIndicativeBudget(studioState))
        };

        try {
          const existing = JSON.parse(localStorage.getItem(STORAGE_KEYS.ENQUIRIES) || '[]');
          existing.unshift(record);
          localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(existing));
        } catch (e) {}

        document.getElementById('confirm-ref-id').textContent = refId;
        document.getElementById('confirm-message-body').textContent =
          `Thank you, ${name}. Your ${submissionMode.toLowerCase()} for ${studioState.eventCategory} (${studioState.designTitle}) in ${location} on ${date} has been recorded with your complete 3D venue specifications (${record.indicativeEstimate} indicative estimate). Our senior scenographer will prepare a tailored CAD & floral proposal.`;
        document.getElementById('enquiry-confirmation-card').classList.remove('hidden');
        document.getElementById('enquiry-confirmation-card').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        showToast(`${submissionMode} logged (${refId})`);
      }

      document.getElementById('booking-enquiry-form').addEventListener('submit', (e) => {
        e.preventDefault();
        processEnquirySubmission('Formal Quotation Request');
      });

      document.getElementById('book-consultation-btn').addEventListener('click', () => {
        processEnquirySubmission('Studio Design Consultation');
      });

      document.getElementById('new-enquiry-btn').addEventListener('click', () => {
        document.getElementById('enquiry-confirmation-card').classList.add('hidden');
      });

      // WhatsApp Enquiry Integration
      document.getElementById('whatsapp-enquiry-btn').addEventListener('click', () => {
        const name = document.getElementById('cust-name').value.trim() || 'Prospective Client';
        const date = document.getElementById('cust-date').value || 'Flexible Date';
        const location = document.getElementById('cust-location').value.trim() || 'TBD';
        const venuePref = document.getElementById('cust-venue-pref').value;

        const message = [
          `👋🏻 Hello ${STUDIO_CONFIG.studioName},`,
          `I would like to enquire about an event scenography proposal:`,
          ``,
          `👤 Client: ${name}`,
          `📅 Event Date: ${date} | Location: ${location}`,
          `📍 Venue Preference: ${venuePref}`,
          ``,
          `--- 3D STUDIO CONFIGURATION ---`,
          buildSummaryText(studioState)
        ].join('\n');

        const waUrl = `https://wa.me/${STUDIO_CONFIG.whatsappNumberRaw}?text=${encodeURIComponent(message)}`;
        window.open(waUrl, '_blank', 'noopener,noreferrer');
      });
    });