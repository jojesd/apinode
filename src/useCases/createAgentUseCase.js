const agentService = require('../services/agentService');

class CreateAgentUseCase {
  async execute(agentData) {
    return await agentService.createAgent(agentData);
  }
}

module.exports = new CreateAgentUseCase();
