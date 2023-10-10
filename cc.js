document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('calorie-form');
    const foodItemInput = document.getElementById('food-item');
    const caloriesInput = document.getElementById('calories');
    const addBtn = document.getElementById('add-btn');
    const calorieList = document.getElementById('calorie-list');
    const totalCaloriesDisplay = document.getElementById('total-calories');

    let totalCalories = 0;

    addBtn.addEventListener('click', function () {
        const foodItem = foodItemInput.value;
        const calories = parseInt(caloriesInput.value);

        if (foodItem.trim() !== '' && !isNaN(calories) && calories > 0) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `${foodItem}: ${calories} calories`;
            calorieList.appendChild(listItem);

            totalCalories += calories;
            totalCaloriesDisplay.textContent = totalCalories;

            foodItemInput.value = '';
            caloriesInput.value = '';
        } else {
            alert('Please enter valid food item and calories.');
        }
    });
});
