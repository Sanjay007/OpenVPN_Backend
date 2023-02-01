module.exports = (VpnServers) => {

  let newVpnServers = { 
    serverName: VpnServers.serverName,
    flag_url: VpnServers.flag_url,
    isActive: VpnServers.isActive,
    ovpnConfiguration: VpnServers.ovpnConfiguration,
    vpnUserName: VpnServers.vpnUserName,
    vpnPassword: VpnServers.vpnPassword,
    free: VpnServers.free,
    isDeleted: VpnServers.isDeleted,
  };

  // remove undefined values
  Object.keys(newVpnServers).forEach(key => newVpnServers[key] === undefined && delete newVpnServers[key]);

  // To validate Entity uncomment this block
  /*
   * const validate = (newVpnServers) => {
   *   if (!newVpnServers.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * validate(newVpnServers) 
   */

  return Object.freeze(newVpnServers);
};
