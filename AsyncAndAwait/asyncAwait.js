function walkdog() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Walking the dog!🐕");
        }, 1000);
    });
}

function cleankitchen() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Cleaning the kitchen!🪥");
        }, 1500);
    });
}

function takeoutTrash() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Taking out the trash!♻️");            
        }, 500);
    });
}

async function dochores() {
    const walkd = await walkdog();
    console.log(walkd);

    const taketrash = await takeoutTrash();
    console.log(taketrash);

    const clenakitch = await cleankitchen();
    console.log(clenakitch);

    console.log("You finished all the chores");
}

dochores();


