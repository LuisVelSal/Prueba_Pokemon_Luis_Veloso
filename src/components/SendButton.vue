<template>
    <button>
        {{ text }}
    </button>
</template>


<script>
    export default {
        props: {
            text: {
                type: String,
                required: true,
            }
        }
    }

</script>

<style>
button {
    background-color: #3722a4;
    border-radius: 8px;
    border-style: none;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    display: inline-block;
    font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: 500;
    height: 35px;
    margin: 0;
    outline: none;
    padding: 10px 16px;
    position: relative;
    text-align: center;
    text-decoration: none;
    transition: color 100ms;
    vertical-align: center;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
}

button:disabled {
    background-color: #6032cd;
}

button:hover,
button:focus {
    background-color: #6032cd;
}

</style>