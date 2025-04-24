// Home route logic
const home = async (req, res) => {
    try {
        res.status(200).send("Hello Home Page");
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Internal Server Error" });
    }
};

// Register route logic
const register = async (req, res) => {
    try {
        res.status(200).send("Welcome to Registration Page");
    } catch (error) {
        res.status(400).send({ msg: "Page not found" });
    }
};

module.exports = { home, register }; // ✅ Export both handlers
