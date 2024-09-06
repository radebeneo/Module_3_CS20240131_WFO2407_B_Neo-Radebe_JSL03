function cookSteak(steakWeight, desiredDoneness) {
    let grillTemperature = 0;
    let steakTemperature = 0; // Initial temperature of the steak
    
    // Step 1: Preheat the grill
    grillTemperature = 204; 
    
    // Step 2: Season the steak
    const seasoning = 'Salt and Pepper';
    // Apply seasoning to both sides of the steak
    
    // Step 3: Cook the steak
    const cookingTimePerSide = (steakWeight / 16) * 5; // Approximation: 5 minutes per side per 16 oz steak
    let cookingTime = 0;

    while (steakTemperature < desiredDoneness) {
      // Grill the steak and measure internal temperature
      if (cookingTime % cookingTimePerSide === 0 && cookingTime !== 0) {
        console.log('Flipping the steak...');
      }
      // Adjust grill temperature and cooking time based on steakWeight and desiredDoneness
      // Update steakTemperature
      
      // If the steak is done, break out of the loop
    }
    
    // Step 4: Serve the steak
    if (steakTemperature >= desiredDoneness) {
      return 'Steak is ready to serve!';
    } else {
      return 'Steak needs more cooking.';
    }
  }
  
  // Usage example:
  const result = cookSteak(16, 63); // Cook a 16 oz steak to medium-rare (63°C)
  console.log(result);
  