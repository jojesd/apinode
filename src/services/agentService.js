const agentRepository = require('../repositories/agentRepository');
const CreateAgentDto = require('../dtos/createAgentDto');

class AgentService {
  async createAgent(agentData) {
    const agentDto = CreateAgentDto.fromRequest(agentData);
    return await agentRepository.createAgent(agentDto);
  }
}

module.exports = new AgentService();