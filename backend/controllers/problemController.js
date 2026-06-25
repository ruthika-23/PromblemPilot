const Problem = require("../models/problemModel");


// @desc Create Problem
// @route POST /api/problems
// @access Private

const createProblem = async (req, res) => {
  try {

    const problem = await Problem.create({

      ...req.body,

      userId: req.user._id

    });


    res.status(201).json(problem);


  } catch (error) {

    res.status(500).json({

      message: error.message

    });

  }
};



// @desc Get All Problems
// @route GET /api/problems
// @access Private

const getProblems = async (req, res) => {
  try {

    const problems = await Problem.find({

      userId: req.user._id

    }).sort({

      createdAt: -1

    });


    res.json(problems);


  } catch (error) {

    res.status(500).json({

      message: error.message

    });

  }
};



// @desc Get Single Problem
// @route GET /api/problems/:id
// @access Private

const getProblem = async (req, res) => {
  try {

    const problem = await Problem.findById(
      req.params.id
    );


    if (!problem) {

      return res.status(404).json({

        message: "Problem not found"

      });

    }


    if (
      problem.userId.toString() !== req.user._id.toString()
    ) {

      return res.status(401).json({

        message: "Not authorized"

      });

    }


    res.json(problem);


  } catch (error) {

    res.status(500).json({

      message: error.message

    });

  }
};



// @desc Update Problem
// @route PUT /api/problems/:id
// @access Private

const updateProblem = async (req, res) => {
  try {

    const problem = await Problem.findById(
      req.params.id
    );


    if (!problem) {

      return res.status(404).json({

        message: "Problem not found"

      });

    }


    if (
      problem.userId.toString() !== req.user._id.toString()
    ) {

      return res.status(401).json({

        message: "Not authorized"

      });

    }

    const updatedProblem =
      await Problem.findByIdAndUpdate(


        req.params.id,

        req.body,

        {
          new: true
        }

      );








    res.json(updatedProblem);



  } catch (error) {


    res.status(500).json({

      message: error.message

    });


  }
};


// @desc Delete Problem
// @route DELETE /api/problems/:id
// @access Private

const deleteProblem = async (req, res) => {

  try {


    const problem = await Problem.findById(
      req.params.id
    );


    if (!problem) {

      return res.status(404).json({

        message: "Problem not found"

      });

    }



    if (
      problem.userId.toString() !== req.user._id.toString()
    ) {

      return res.status(401).json({

        message: "Not authorized"

      });

    }



    await problem.deleteOne();



    res.json({

      message: "Problem deleted"

    });



  } catch (error) {


    res.status(500).json({

      message: error.message

    });


  }

};



module.exports = {

  createProblem,

  getProblems,

  getProblem,

  updateProblem,

  deleteProblem

};