import type { Item } from "../types";

export const items: Item[] = [
  {
    id: "helm-of-frontend-mastery",
    name: "Helm of Frontend Mastery",
    slot: "helmet",
    kind: "skill",
    description:
      "A runed helm forged through a thousand re-renders. It keeps the component tree lucid and the layout steady under pressure.",
    durability: { current: 92, max: 100 },
    stats: [
      { name: "Frontend Mastery", value: 20 },
      { name: "React Sorcery", value: 10 },
    ],
    equipped: true,
  },
  {
    id: "blade-of-backend-mastery",
    name: "Blade of Backend Mastery",
    slot: "weapon",
    kind: "skill",
    description:
      "A keen edge that cuts through monoliths. Especially effective against tangled business logic and slow queries.",
    durability: { current: 88, max: 100 },
    stats: [
      { name: "Node.js", value: 18 },
      { name: "NestJS", value: 14 },
    ],
    equipped: true,
  },
  {
    id: "cuirass-of-clean-architecture",
    name: "Cuirass of Clean Architecture",
    slot: "chest",
    kind: "artifact",
    description:
      "Layered plates of hexagonal steel. Protects the system from coupling, leakage and rushed shortcuts.",
    durability: { current: 95, max: 100 },
    stats: [{ name: "Architecture", value: 22 }],
    equipped: true,
  },
  {
    id: "cloak-of-the-event-stream",
    name: "Cloak of the Event Stream",
    slot: "cloak",
    kind: "artifact",
    description:
      "Woven from asynchronous messages. Lets its bearer move between services without ever blocking the queue.",
    durability: { current: 76, max: 100 },
    stats: [
      { name: "RabbitMQ", value: 12 },
      { name: "Kafka", value: 10 },
    ],
    equipped: true,
  },
  {
    id: "boots-of-swift-delivery",
    name: "Boots of Swift Delivery",
    slot: "boots",
    kind: "skill",
    description:
      "Light, weathered boots that turn a local commit into a deployed build before the coffee goes cold.",
    durability: { current: 84, max: 100 },
    stats: [
      { name: "CI/CD", value: 16 },
      { name: "Docker", value: 12 },
    ],
    equipped: false,
  },
  {
    id: "amulet-of-keycloak",
    name: "Amulet of Keycloak",
    slot: "amulet",
    kind: "artifact",
    description:
      "A warm amber amulet that hums when identity is verified. Grants safe passage through guarded gateways.",
    durability: { current: 90, max: 100 },
    stats: [
      { name: "IAM", value: 20 },
      { name: "Security", value: 14 },
    ],
    equipped: true,
  },
  {
    id: "aegis-of-kong-gateway",
    name: "Aegis of the Kong Gateway",
    slot: "shield",
    kind: "artifact",
    description:
      "A broad shield engraved with routing runes. It absorbs traffic spikes and reflects unauthorized requests.",
    durability: { current: 86, max: 100 },
    stats: [
      { name: "API Gateway", value: 18 },
      { name: "Performance", value: 12 },
    ],
    equipped: true,
  },
  {
    id: "gauntlets-of-type-safety",
    name: "Gauntlets of Type Safety",
    slot: "gloves",
    kind: "skill",
    description:
      "Tight fitted gauntlets. They turn vague any values into firmly typed guarantees before they can escape.",
    durability: { current: 97, max: 100 },
    stats: [{ name: "TypeScript", value: 24 }],
    equipped: true,
  },
  {
    id: "girdle-of-data-persistence",
    name: "Girdle of Data Persistence",
    slot: "belt",
    kind: "skill",
    description:
      "A heavy girdle lined with indexed pockets. Keeps every record close and every transaction honest.",
    durability: { current: 80, max: 100 },
    stats: [
      { name: "PostgreSQL", value: 14 },
      { name: "Redis", value: 10 },
    ],
    equipped: false,
  },
  {
    id: "ring-of-search-mastery",
    name: "Ring of Search Mastery",
    slot: "ring",
    kind: "skill",
    description:
      "A pale stone ring that finds what others miss, even inside mountains of unstructured documents.",
    durability: { current: 78, max: 100 },
    stats: [
      { name: "Elasticsearch", value: 16 },
      { name: "Observability", value: 12 },
    ],
    equipped: true,
  },
  {
    id: "trinket-of-3d-craft",
    name: "Trinket of 3D Craft",
    slot: "trinket",
    kind: "artifact",
    description:
      "A tiny spinning polyhedron. Its faces rearrange themselves into scenes, meshes and interactive worlds.",
    durability: { current: 70, max: 100 },
    stats: [
      { name: "Three.js", value: 18 },
      { name: "Visualization", value: 10 },
    ],
    equipped: false,
  },
  {
    id: "relic-of-teaching",
    name: "Relic of Teaching",
    slot: "relic",
    kind: "artifact",
    description:
      "An old chalk-white relic. It patiently turns hard-won knowledge into lessons others can actually use.",
    durability: { current: 100, max: 100 },
    stats: [
      { name: "Mentorship", value: 20 },
      { name: "Odoo", value: 12 },
    ],
    equipped: true,
  },
];
