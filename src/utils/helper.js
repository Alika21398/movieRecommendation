export const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
});

export function formatNumber(value) {
    if (value >= 1000000000) {
      return (value / 1000000000).toFixed(2) + " Ar"; // Arab
    } else if (value >= 10000000) {
      return (value / 10000000).toFixed(2) + " Cr"; // Crore
    } else if (value >= 100000) {
      return (value / 100000).toFixed(2) + " L"; // Lakh
    } else {
      return value?.toLocaleString(); // Default formatting
    }
  }


  export function formatDollar(value) {
    if (value >= 1_000_000_000_000) {
      return `$${(value / 1_000_000_000_000).toFixed(2)}T`; // Trillion
    } else if (value >= 1_000_000_000) {
      return `$${(value / 1_000_000_000).toFixed(2)}B`; // Billion
    } else if (value >= 1_000_000) {
      return `$${(value / 1_000_000).toFixed(2)}M`; // Million
    } else if (value >= 1_000) {
      return `$${(value / 1_000).toFixed(2)}K`; // Thousand
    } else {
      return `$${value?.toLocaleString()}`; // Default formatting with commas
    }
  }
  
  
  
  

  