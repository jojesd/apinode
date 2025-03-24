const createAgentUseCase = require('../useCases/createAgentUseCase');

class AgentController {
  async create(req, res) {
    try {
      const agentData = req.body;
      const agent = await createAgentUseCase.execute(agentData);
      return res.status(201).json(agent);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new AgentController();
