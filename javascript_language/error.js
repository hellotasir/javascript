const age = 19;

if (age < 18) {
  
    try {
        console.log('This will not be executed.');
    } catch (e) {
        console.log('Caught an error:', e.message);
    }
}