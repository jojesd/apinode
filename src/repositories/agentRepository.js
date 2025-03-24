const Agent = require('../models/agent');

class AgentRepository {
  async createAgent(agentDto) {
    const agent = await Agent.create({
      name: agentDto.name,
      cpf: agentDto.cpf,
      age: agentDto.age,
      email: agentDto.email
    });
    return agent;
  }
}

module.exports = new AgentRepository();