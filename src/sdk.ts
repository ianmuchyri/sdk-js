import Users from "./users";
import Domains from "./domains";
import Certs from "./certs";
import Groups from "./groups";
import Invitations from "./invitations";
import Channels from "./channels";
import Messages from "./messages";
import Bootstrap from "./bootstrap";
import Journal from "./journal";
import Health from "./health";
import Clients from "./clients";
import Rules from "./re";

export type {
  User,
  UsersPage,
  ClientBasicInfo,
  Client,
  ClientsPage,
  GroupBasicInfo,
  Group,
  GroupsPage,
  HierarchyPageMeta,
  HierarchyPage,
  ChannelBasicInfo,
  Channel,
  ChannelsPage,
  Login,
  BasicPageMeta,
  PageMetadata,
  Token,
  Response,
  Domain,
  DomainsPage,
  Cert,
  CertsPage,
  Invitation,
  InvitationsPage,
  UserCredentials,
  ClientCredentials,
  UserBasicInfo,
  DomainBasicInfo,
  Permissions,
  Status,
  MessagesPage,
  SenMLMessage,
  MessagesPageMetadata,
  BootstrapConfig,
  BootstrapPage,
  Journal,
  JournalsPage,
  JournalsPageMetadata,
  HealthInfo,
  Role,
  RolePage,
  EntityActionRole,
  EntityMemberRole,
  MembersPage,
  Script,
  Schedule,
  RuleStatus,
  Rule,
  RulesPageMetadata,
  RulesPage,
} from "./defs";

const defaultUrl = "http://localhost";

export interface SDKConfig {
  usersUrl?: string;
  channelsUrl?: string;
  domainsUrl?: string;
  clientsUrl?: string;
  groupsUrl?: string;
  certsUrl?: string;
  readersUrl?: string;
  httpAdapterUrl?: string;
  invitationsUrl?: string;
  bootstrapUrl?: string;
  journalUrl?: string;
  rulesUrl?: string;
}

class SDK {
  users: Users;

  domains: Domains;

  clients: Clients;

  certs: Certs;

  groups: Groups;

  channels: Channels;

  messages: Messages;

  invitations: Invitations;

  bootstrap: Bootstrap;

  Journal: Journal;

  Health: Health;

  Rules: Rules;

  constructor({
    usersUrl = defaultUrl,
    channelsUrl = defaultUrl,
    domainsUrl = defaultUrl,
    clientsUrl = defaultUrl,
    groupsUrl = defaultUrl,
    certsUrl = defaultUrl,
    readersUrl = defaultUrl,
    httpAdapterUrl = defaultUrl,
    invitationsUrl = defaultUrl,
    bootstrapUrl = defaultUrl,
    journalUrl = defaultUrl,
    rulesUrl = defaultUrl,
  }: SDKConfig = {}) {
    this.users = new Users({ usersUrl, clientsUrl });
    this.domains = new Domains({ domainsUrl, usersUrl });
    this.clients = new Clients({ clientsUrl, usersUrl });
    this.certs = new Certs(certsUrl);
    this.groups = new Groups({ groupsUrl, usersUrl });
    this.channels = new Channels({ channelsUrl, usersUrl });
    this.messages = new Messages({ readersUrl, httpAdapterUrl });
    this.invitations = new Invitations(invitationsUrl);
    this.bootstrap = new Bootstrap(bootstrapUrl);
    this.Journal = new Journal(journalUrl);
    this.Health = new Health({
      usersUrl,
      clientsUrl,
      channelsUrl,
      bootstrapUrl,
      certsUrl,
      readersUrl,
      httpAdapterUrl,
      journalUrl,
      invitationsUrl,
      domainsUrl,
      groupsUrl,
    });
    this.Rules = new Rules({ rulesUrl });
  }
}

export default SDK;
