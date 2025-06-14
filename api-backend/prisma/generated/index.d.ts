
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model BusinessEntity
 * 
 */
export type BusinessEntity = $Result.DefaultSelection<Prisma.$BusinessEntityPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model DocumentProduct
 * 
 */
export type DocumentProduct = $Result.DefaultSelection<Prisma.$DocumentProductPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Roles: {
  Owner: 'Owner',
  Admin: 'Admin',
  User: 'User'
};

export type Roles = (typeof Roles)[keyof typeof Roles]


export const EntityStatus: {
  Active: 'Active',
  Inactive: 'Inactive'
};

export type EntityStatus = (typeof EntityStatus)[keyof typeof EntityStatus]


export const EntityType: {
  Supplier: 'Supplier',
  Customer: 'Customer'
};

export type EntityType = (typeof EntityType)[keyof typeof EntityType]


export const Measurements: {
  EA: 'EA',
  PK: 'PK',
  CTN: 'CTN',
  BX: 'BX',
  GAL: 'GAL'
};

export type Measurements = (typeof Measurements)[keyof typeof Measurements]


export const DocumentTypes: {
  PurchaseOrder: 'PurchaseOrder',
  SalesOrder: 'SalesOrder',
  Invoice: 'Invoice',
  Bill: 'Bill',
  ReturnOrder: 'ReturnOrder',
  CreditNote: 'CreditNote',
  Quotation: 'Quotation'
};

export type DocumentTypes = (typeof DocumentTypes)[keyof typeof DocumentTypes]


export const DocumentStatus: {
  Complete: 'Complete',
  Pending: 'Pending',
  Cancelled: 'Cancelled',
  Rejected: 'Rejected',
  Accepted: 'Accepted'
};

export type DocumentStatus = (typeof DocumentStatus)[keyof typeof DocumentStatus]


export const PaymentStatus: {
  Paid: 'Paid',
  PartiallyPaid: 'PartiallyPaid',
  Overdue: 'Overdue',
  Open: 'Open',
  NotApplicable: 'NotApplicable'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]

}

export type Roles = $Enums.Roles

export const Roles: typeof $Enums.Roles

export type EntityStatus = $Enums.EntityStatus

export const EntityStatus: typeof $Enums.EntityStatus

export type EntityType = $Enums.EntityType

export const EntityType: typeof $Enums.EntityType

export type Measurements = $Enums.Measurements

export const Measurements: typeof $Enums.Measurements

export type DocumentTypes = $Enums.DocumentTypes

export const DocumentTypes: typeof $Enums.DocumentTypes

export type DocumentStatus = $Enums.DocumentStatus

export const DocumentStatus: typeof $Enums.DocumentStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Organizations
 * const organizations = await prisma.organization.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.businessEntity`: Exposes CRUD operations for the **BusinessEntity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusinessEntities
    * const businessEntities = await prisma.businessEntity.findMany()
    * ```
    */
  get businessEntity(): Prisma.BusinessEntityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documentProduct`: Exposes CRUD operations for the **DocumentProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocumentProducts
    * const documentProducts = await prisma.documentProduct.findMany()
    * ```
    */
  get documentProduct(): Prisma.DocumentProductDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Organization: 'Organization',
    User: 'User',
    BusinessEntity: 'BusinessEntity',
    Product: 'Product',
    Document: 'Document',
    DocumentProduct: 'DocumentProduct'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "organization" | "user" | "businessEntity" | "product" | "document" | "documentProduct"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      BusinessEntity: {
        payload: Prisma.$BusinessEntityPayload<ExtArgs>
        fields: Prisma.BusinessEntityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessEntityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessEntityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessEntityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessEntityPayload>
          }
          findFirst: {
            args: Prisma.BusinessEntityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessEntityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessEntityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessEntityPayload>
          }
          findMany: {
            args: Prisma.BusinessEntityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessEntityPayload>[]
          }
          create: {
            args: Prisma.BusinessEntityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessEntityPayload>
          }
          createMany: {
            args: Prisma.BusinessEntityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusinessEntityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessEntityPayload>[]
          }
          delete: {
            args: Prisma.BusinessEntityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessEntityPayload>
          }
          update: {
            args: Prisma.BusinessEntityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessEntityPayload>
          }
          deleteMany: {
            args: Prisma.BusinessEntityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessEntityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BusinessEntityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessEntityPayload>[]
          }
          upsert: {
            args: Prisma.BusinessEntityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessEntityPayload>
          }
          aggregate: {
            args: Prisma.BusinessEntityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusinessEntity>
          }
          groupBy: {
            args: Prisma.BusinessEntityGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessEntityGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessEntityCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessEntityCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      DocumentProduct: {
        payload: Prisma.$DocumentProductPayload<ExtArgs>
        fields: Prisma.DocumentProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentProductPayload>
          }
          findFirst: {
            args: Prisma.DocumentProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentProductPayload>
          }
          findMany: {
            args: Prisma.DocumentProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentProductPayload>[]
          }
          create: {
            args: Prisma.DocumentProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentProductPayload>
          }
          createMany: {
            args: Prisma.DocumentProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentProductPayload>[]
          }
          delete: {
            args: Prisma.DocumentProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentProductPayload>
          }
          update: {
            args: Prisma.DocumentProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentProductPayload>
          }
          deleteMany: {
            args: Prisma.DocumentProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentProductPayload>[]
          }
          upsert: {
            args: Prisma.DocumentProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentProductPayload>
          }
          aggregate: {
            args: Prisma.DocumentProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentProduct>
          }
          groupBy: {
            args: Prisma.DocumentProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentProductCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentProductCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    organization?: OrganizationOmit
    user?: UserOmit
    businessEntity?: BusinessEntityOmit
    product?: ProductOmit
    document?: DocumentOmit
    documentProduct?: DocumentProductOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    users: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | OrganizationCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    products: number
    documents: number
    businessEntities: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | UserCountOutputTypeCountProductsArgs
    documents?: boolean | UserCountOutputTypeCountDocumentsArgs
    businessEntities?: boolean | UserCountOutputTypeCountBusinessEntitiesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBusinessEntitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessEntityWhereInput
  }


  /**
   * Count Type BusinessEntityCountOutputType
   */

  export type BusinessEntityCountOutputType = {
    documents: number
  }

  export type BusinessEntityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | BusinessEntityCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * BusinessEntityCountOutputType without action
   */
  export type BusinessEntityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessEntityCountOutputType
     */
    select?: BusinessEntityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BusinessEntityCountOutputType without action
   */
  export type BusinessEntityCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    documents: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | ProductCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentProductWhereInput
  }


  /**
   * Count Type DocumentCountOutputType
   */

  export type DocumentCountOutputType = {
    products: number
  }

  export type DocumentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | DocumentCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCountOutputType
     */
    select?: DocumentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentProductWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationAvgAggregateOutputType = {
    id: number | null
  }

  export type OrganizationSumAggregateOutputType = {
    id: number | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: number | null
    name: string | null
    street1: string | null
    street2: string | null
    city: string | null
    state: string | null
    country: string | null
    zip: string | null
    phone: string | null
    email: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    street1: string | null
    street2: string | null
    city: string | null
    state: string | null
    country: string | null
    zip: string | null
    phone: string | null
    email: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    street1: number
    street2: number
    city: number
    state: number
    country: number
    zip: number
    phone: number
    email: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrganizationAvgAggregateInputType = {
    id?: true
  }

  export type OrganizationSumAggregateInputType = {
    id?: true
  }

  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
    street1?: true
    street2?: true
    city?: true
    state?: true
    country?: true
    zip?: true
    phone?: true
    email?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
    street1?: true
    street2?: true
    city?: true
    state?: true
    country?: true
    zip?: true
    phone?: true
    email?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    street1?: true
    street2?: true
    city?: true
    state?: true
    country?: true
    zip?: true
    phone?: true
    email?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _avg?: OrganizationAvgAggregateInputType
    _sum?: OrganizationSumAggregateInputType
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: number
    name: string
    street1: string | null
    street2: string | null
    city: string | null
    state: string | null
    country: string | null
    zip: string | null
    phone: string
    email: string
    image: string
    createdAt: Date
    updatedAt: Date
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    street1?: boolean
    street2?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    zip?: boolean
    phone?: boolean
    email?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Organization$usersArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    street1?: boolean
    street2?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    zip?: boolean
    phone?: boolean
    email?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    street1?: boolean
    street2?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    zip?: boolean
    phone?: boolean
    email?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    name?: boolean
    street1?: boolean
    street2?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    zip?: boolean
    phone?: boolean
    email?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "street1" | "street2" | "city" | "state" | "country" | "zip" | "phone" | "email" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Organization$usersArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      street1: string | null
      street2: string | null
      city: string | null
      state: string | null
      country: string | null
      zip: string | null
      phone: string
      email: string
      image: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {OrganizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Organization$usersArgs<ExtArgs> = {}>(args?: Subset<T, Organization$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'Int'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly street1: FieldRef<"Organization", 'String'>
    readonly street2: FieldRef<"Organization", 'String'>
    readonly city: FieldRef<"Organization", 'String'>
    readonly state: FieldRef<"Organization", 'String'>
    readonly country: FieldRef<"Organization", 'String'>
    readonly zip: FieldRef<"Organization", 'String'>
    readonly phone: FieldRef<"Organization", 'String'>
    readonly email: FieldRef<"Organization", 'String'>
    readonly image: FieldRef<"Organization", 'String'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
    readonly updatedAt: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization updateManyAndReturn
   */
  export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization.users
   */
  export type Organization$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    orgId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    orgId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    orgId: number | null
    username: string | null
    password: string | null
    firstname: string | null
    middlename: string | null
    lastname: string | null
    email: string | null
    phone: string | null
    image: string | null
    role: $Enums.Roles | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    orgId: number | null
    username: string | null
    password: string | null
    firstname: string | null
    middlename: string | null
    lastname: string | null
    email: string | null
    phone: string | null
    image: string | null
    role: $Enums.Roles | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    orgId: number
    username: number
    password: number
    firstname: number
    middlename: number
    lastname: number
    email: number
    phone: number
    image: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    orgId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    orgId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    orgId?: true
    username?: true
    password?: true
    firstname?: true
    middlename?: true
    lastname?: true
    email?: true
    phone?: true
    image?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    orgId?: true
    username?: true
    password?: true
    firstname?: true
    middlename?: true
    lastname?: true
    email?: true
    phone?: true
    image?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    orgId?: true
    username?: true
    password?: true
    firstname?: true
    middlename?: true
    lastname?: true
    email?: true
    phone?: true
    image?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    orgId: number | null
    username: string
    password: string
    firstname: string
    middlename: string | null
    lastname: string
    email: string
    phone: string | null
    image: string | null
    role: $Enums.Roles
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    username?: boolean
    password?: boolean
    firstname?: boolean
    middlename?: boolean
    lastname?: boolean
    email?: boolean
    phone?: boolean
    image?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | User$organizationArgs<ExtArgs>
    products?: boolean | User$productsArgs<ExtArgs>
    documents?: boolean | User$documentsArgs<ExtArgs>
    businessEntities?: boolean | User$businessEntitiesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    username?: boolean
    password?: boolean
    firstname?: boolean
    middlename?: boolean
    lastname?: boolean
    email?: boolean
    phone?: boolean
    image?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | User$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    username?: boolean
    password?: boolean
    firstname?: boolean
    middlename?: boolean
    lastname?: boolean
    email?: boolean
    phone?: boolean
    image?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | User$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    orgId?: boolean
    username?: boolean
    password?: boolean
    firstname?: boolean
    middlename?: boolean
    lastname?: boolean
    email?: boolean
    phone?: boolean
    image?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "username" | "password" | "firstname" | "middlename" | "lastname" | "email" | "phone" | "image" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | User$organizationArgs<ExtArgs>
    products?: boolean | User$productsArgs<ExtArgs>
    documents?: boolean | User$documentsArgs<ExtArgs>
    businessEntities?: boolean | User$businessEntitiesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | User$organizationArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | User$organizationArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs> | null
      products: Prisma.$ProductPayload<ExtArgs>[]
      documents: Prisma.$DocumentPayload<ExtArgs>[]
      businessEntities: Prisma.$BusinessEntityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orgId: number | null
      username: string
      password: string
      firstname: string
      middlename: string | null
      lastname: string
      email: string
      phone: string | null
      image: string | null
      role: $Enums.Roles
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends User$organizationArgs<ExtArgs> = {}>(args?: Subset<T, User$organizationArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    products<T extends User$productsArgs<ExtArgs> = {}>(args?: Subset<T, User$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documents<T extends User$documentsArgs<ExtArgs> = {}>(args?: Subset<T, User$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    businessEntities<T extends User$businessEntitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$businessEntitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessEntityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly orgId: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstname: FieldRef<"User", 'String'>
    readonly middlename: FieldRef<"User", 'String'>
    readonly lastname: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Roles'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.organization
   */
  export type User$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
  }

  /**
   * User.products
   */
  export type User$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * User.documents
   */
  export type User$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * User.businessEntities
   */
  export type User$businessEntitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessEntity
     */
    select?: BusinessEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessEntity
     */
    omit?: BusinessEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessEntityInclude<ExtArgs> | null
    where?: BusinessEntityWhereInput
    orderBy?: BusinessEntityOrderByWithRelationInput | BusinessEntityOrderByWithRelationInput[]
    cursor?: BusinessEntityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BusinessEntityScalarFieldEnum | BusinessEntityScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model BusinessEntity
   */

  export type AggregateBusinessEntity = {
    _count: BusinessEntityCountAggregateOutputType | null
    _avg: BusinessEntityAvgAggregateOutputType | null
    _sum: BusinessEntitySumAggregateOutputType | null
    _min: BusinessEntityMinAggregateOutputType | null
    _max: BusinessEntityMaxAggregateOutputType | null
  }

  export type BusinessEntityAvgAggregateOutputType = {
    id: number | null
    ownerId: number | null
    defaultMarkup: Decimal | null
    standardMarkup: Decimal | null
    creditLimit: Decimal | null
    openBalance: Decimal | null
    totalOverdue: Decimal | null
  }

  export type BusinessEntitySumAggregateOutputType = {
    id: number | null
    ownerId: number | null
    defaultMarkup: Decimal | null
    standardMarkup: Decimal | null
    creditLimit: Decimal | null
    openBalance: Decimal | null
    totalOverdue: Decimal | null
  }

  export type BusinessEntityMinAggregateOutputType = {
    id: number | null
    type: $Enums.EntityType | null
    ownerId: number | null
    name: string | null
    trn: string | null
    description: string | null
    note: string | null
    defaultMarkup: Decimal | null
    standardMarkup: Decimal | null
    website: string | null
    street1: string | null
    street2: string | null
    city: string | null
    state: string | null
    country: string | null
    zip: string | null
    contactTitle: string | null
    contactFirstName: string | null
    contactMiddleName: string | null
    contactLastName: string | null
    contactPhone: string | null
    contactEmail: string | null
    creditLimit: Decimal | null
    openBalance: Decimal | null
    totalOverdue: Decimal | null
    status: $Enums.EntityStatus | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusinessEntityMaxAggregateOutputType = {
    id: number | null
    type: $Enums.EntityType | null
    ownerId: number | null
    name: string | null
    trn: string | null
    description: string | null
    note: string | null
    defaultMarkup: Decimal | null
    standardMarkup: Decimal | null
    website: string | null
    street1: string | null
    street2: string | null
    city: string | null
    state: string | null
    country: string | null
    zip: string | null
    contactTitle: string | null
    contactFirstName: string | null
    contactMiddleName: string | null
    contactLastName: string | null
    contactPhone: string | null
    contactEmail: string | null
    creditLimit: Decimal | null
    openBalance: Decimal | null
    totalOverdue: Decimal | null
    status: $Enums.EntityStatus | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusinessEntityCountAggregateOutputType = {
    id: number
    type: number
    ownerId: number
    name: number
    trn: number
    description: number
    note: number
    defaultMarkup: number
    standardMarkup: number
    website: number
    street1: number
    street2: number
    city: number
    state: number
    country: number
    zip: number
    contactTitle: number
    contactFirstName: number
    contactMiddleName: number
    contactLastName: number
    contactPhone: number
    contactEmail: number
    creditLimit: number
    openBalance: number
    totalOverdue: number
    status: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BusinessEntityAvgAggregateInputType = {
    id?: true
    ownerId?: true
    defaultMarkup?: true
    standardMarkup?: true
    creditLimit?: true
    openBalance?: true
    totalOverdue?: true
  }

  export type BusinessEntitySumAggregateInputType = {
    id?: true
    ownerId?: true
    defaultMarkup?: true
    standardMarkup?: true
    creditLimit?: true
    openBalance?: true
    totalOverdue?: true
  }

  export type BusinessEntityMinAggregateInputType = {
    id?: true
    type?: true
    ownerId?: true
    name?: true
    trn?: true
    description?: true
    note?: true
    defaultMarkup?: true
    standardMarkup?: true
    website?: true
    street1?: true
    street2?: true
    city?: true
    state?: true
    country?: true
    zip?: true
    contactTitle?: true
    contactFirstName?: true
    contactMiddleName?: true
    contactLastName?: true
    contactPhone?: true
    contactEmail?: true
    creditLimit?: true
    openBalance?: true
    totalOverdue?: true
    status?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusinessEntityMaxAggregateInputType = {
    id?: true
    type?: true
    ownerId?: true
    name?: true
    trn?: true
    description?: true
    note?: true
    defaultMarkup?: true
    standardMarkup?: true
    website?: true
    street1?: true
    street2?: true
    city?: true
    state?: true
    country?: true
    zip?: true
    contactTitle?: true
    contactFirstName?: true
    contactMiddleName?: true
    contactLastName?: true
    contactPhone?: true
    contactEmail?: true
    creditLimit?: true
    openBalance?: true
    totalOverdue?: true
    status?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusinessEntityCountAggregateInputType = {
    id?: true
    type?: true
    ownerId?: true
    name?: true
    trn?: true
    description?: true
    note?: true
    defaultMarkup?: true
    standardMarkup?: true
    website?: true
    street1?: true
    street2?: true
    city?: true
    state?: true
    country?: true
    zip?: true
    contactTitle?: true
    contactFirstName?: true
    contactMiddleName?: true
    contactLastName?: true
    contactPhone?: true
    contactEmail?: true
    creditLimit?: true
    openBalance?: true
    totalOverdue?: true
    status?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BusinessEntityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessEntity to aggregate.
     */
    where?: BusinessEntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessEntities to fetch.
     */
    orderBy?: BusinessEntityOrderByWithRelationInput | BusinessEntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessEntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessEntities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessEntities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusinessEntities
    **/
    _count?: true | BusinessEntityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusinessEntityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusinessEntitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessEntityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessEntityMaxAggregateInputType
  }

  export type GetBusinessEntityAggregateType<T extends BusinessEntityAggregateArgs> = {
        [P in keyof T & keyof AggregateBusinessEntity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusinessEntity[P]>
      : GetScalarType<T[P], AggregateBusinessEntity[P]>
  }




  export type BusinessEntityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessEntityWhereInput
    orderBy?: BusinessEntityOrderByWithAggregationInput | BusinessEntityOrderByWithAggregationInput[]
    by: BusinessEntityScalarFieldEnum[] | BusinessEntityScalarFieldEnum
    having?: BusinessEntityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessEntityCountAggregateInputType | true
    _avg?: BusinessEntityAvgAggregateInputType
    _sum?: BusinessEntitySumAggregateInputType
    _min?: BusinessEntityMinAggregateInputType
    _max?: BusinessEntityMaxAggregateInputType
  }

  export type BusinessEntityGroupByOutputType = {
    id: number
    type: $Enums.EntityType
    ownerId: number
    name: string
    trn: string
    description: string | null
    note: string | null
    defaultMarkup: Decimal | null
    standardMarkup: Decimal | null
    website: string | null
    street1: string | null
    street2: string | null
    city: string | null
    state: string | null
    country: string | null
    zip: string | null
    contactTitle: string | null
    contactFirstName: string | null
    contactMiddleName: string | null
    contactLastName: string | null
    contactPhone: string | null
    contactEmail: string | null
    creditLimit: Decimal
    openBalance: Decimal
    totalOverdue: Decimal
    status: $Enums.EntityStatus
    image: string
    createdAt: Date
    updatedAt: Date
    _count: BusinessEntityCountAggregateOutputType | null
    _avg: BusinessEntityAvgAggregateOutputType | null
    _sum: BusinessEntitySumAggregateOutputType | null
    _min: BusinessEntityMinAggregateOutputType | null
    _max: BusinessEntityMaxAggregateOutputType | null
  }

  type GetBusinessEntityGroupByPayload<T extends BusinessEntityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessEntityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessEntityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessEntityGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessEntityGroupByOutputType[P]>
        }
      >
    >


  export type BusinessEntitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    ownerId?: boolean
    name?: boolean
    trn?: boolean
    description?: boolean
    note?: boolean
    defaultMarkup?: boolean
    standardMarkup?: boolean
    website?: boolean
    street1?: boolean
    street2?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    zip?: boolean
    contactTitle?: boolean
    contactFirstName?: boolean
    contactMiddleName?: boolean
    contactLastName?: boolean
    contactPhone?: boolean
    contactEmail?: boolean
    creditLimit?: boolean
    openBalance?: boolean
    totalOverdue?: boolean
    status?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    documents?: boolean | BusinessEntity$documentsArgs<ExtArgs>
    _count?: boolean | BusinessEntityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessEntity"]>

  export type BusinessEntitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    ownerId?: boolean
    name?: boolean
    trn?: boolean
    description?: boolean
    note?: boolean
    defaultMarkup?: boolean
    standardMarkup?: boolean
    website?: boolean
    street1?: boolean
    street2?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    zip?: boolean
    contactTitle?: boolean
    contactFirstName?: boolean
    contactMiddleName?: boolean
    contactLastName?: boolean
    contactPhone?: boolean
    contactEmail?: boolean
    creditLimit?: boolean
    openBalance?: boolean
    totalOverdue?: boolean
    status?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessEntity"]>

  export type BusinessEntitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    ownerId?: boolean
    name?: boolean
    trn?: boolean
    description?: boolean
    note?: boolean
    defaultMarkup?: boolean
    standardMarkup?: boolean
    website?: boolean
    street1?: boolean
    street2?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    zip?: boolean
    contactTitle?: boolean
    contactFirstName?: boolean
    contactMiddleName?: boolean
    contactLastName?: boolean
    contactPhone?: boolean
    contactEmail?: boolean
    creditLimit?: boolean
    openBalance?: boolean
    totalOverdue?: boolean
    status?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessEntity"]>

  export type BusinessEntitySelectScalar = {
    id?: boolean
    type?: boolean
    ownerId?: boolean
    name?: boolean
    trn?: boolean
    description?: boolean
    note?: boolean
    defaultMarkup?: boolean
    standardMarkup?: boolean
    website?: boolean
    street1?: boolean
    street2?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    zip?: boolean
    contactTitle?: boolean
    contactFirstName?: boolean
    contactMiddleName?: boolean
    contactLastName?: boolean
    contactPhone?: boolean
    contactEmail?: boolean
    creditLimit?: boolean
    openBalance?: boolean
    totalOverdue?: boolean
    status?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BusinessEntityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "ownerId" | "name" | "trn" | "description" | "note" | "defaultMarkup" | "standardMarkup" | "website" | "street1" | "street2" | "city" | "state" | "country" | "zip" | "contactTitle" | "contactFirstName" | "contactMiddleName" | "contactLastName" | "contactPhone" | "contactEmail" | "creditLimit" | "openBalance" | "totalOverdue" | "status" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["businessEntity"]>
  export type BusinessEntityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    documents?: boolean | BusinessEntity$documentsArgs<ExtArgs>
    _count?: boolean | BusinessEntityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BusinessEntityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BusinessEntityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BusinessEntityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BusinessEntity"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      documents: Prisma.$DocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: $Enums.EntityType
      ownerId: number
      name: string
      trn: string
      description: string | null
      note: string | null
      defaultMarkup: Prisma.Decimal | null
      standardMarkup: Prisma.Decimal | null
      website: string | null
      street1: string | null
      street2: string | null
      city: string | null
      state: string | null
      country: string | null
      zip: string | null
      contactTitle: string | null
      contactFirstName: string | null
      contactMiddleName: string | null
      contactLastName: string | null
      contactPhone: string | null
      contactEmail: string | null
      creditLimit: Prisma.Decimal
      openBalance: Prisma.Decimal
      totalOverdue: Prisma.Decimal
      status: $Enums.EntityStatus
      image: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["businessEntity"]>
    composites: {}
  }

  type BusinessEntityGetPayload<S extends boolean | null | undefined | BusinessEntityDefaultArgs> = $Result.GetResult<Prisma.$BusinessEntityPayload, S>

  type BusinessEntityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusinessEntityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusinessEntityCountAggregateInputType | true
    }

  export interface BusinessEntityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BusinessEntity'], meta: { name: 'BusinessEntity' } }
    /**
     * Find zero or one BusinessEntity that matches the filter.
     * @param {BusinessEntityFindUniqueArgs} args - Arguments to find a BusinessEntity
     * @example
     * // Get one BusinessEntity
     * const businessEntity = await prisma.businessEntity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessEntityFindUniqueArgs>(args: SelectSubset<T, BusinessEntityFindUniqueArgs<ExtArgs>>): Prisma__BusinessEntityClient<$Result.GetResult<Prisma.$BusinessEntityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BusinessEntity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusinessEntityFindUniqueOrThrowArgs} args - Arguments to find a BusinessEntity
     * @example
     * // Get one BusinessEntity
     * const businessEntity = await prisma.businessEntity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessEntityFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessEntityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessEntityClient<$Result.GetResult<Prisma.$BusinessEntityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessEntity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessEntityFindFirstArgs} args - Arguments to find a BusinessEntity
     * @example
     * // Get one BusinessEntity
     * const businessEntity = await prisma.businessEntity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessEntityFindFirstArgs>(args?: SelectSubset<T, BusinessEntityFindFirstArgs<ExtArgs>>): Prisma__BusinessEntityClient<$Result.GetResult<Prisma.$BusinessEntityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessEntity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessEntityFindFirstOrThrowArgs} args - Arguments to find a BusinessEntity
     * @example
     * // Get one BusinessEntity
     * const businessEntity = await prisma.businessEntity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessEntityFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessEntityFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessEntityClient<$Result.GetResult<Prisma.$BusinessEntityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BusinessEntities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessEntityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusinessEntities
     * const businessEntities = await prisma.businessEntity.findMany()
     * 
     * // Get first 10 BusinessEntities
     * const businessEntities = await prisma.businessEntity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessEntityWithIdOnly = await prisma.businessEntity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusinessEntityFindManyArgs>(args?: SelectSubset<T, BusinessEntityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessEntityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BusinessEntity.
     * @param {BusinessEntityCreateArgs} args - Arguments to create a BusinessEntity.
     * @example
     * // Create one BusinessEntity
     * const BusinessEntity = await prisma.businessEntity.create({
     *   data: {
     *     // ... data to create a BusinessEntity
     *   }
     * })
     * 
     */
    create<T extends BusinessEntityCreateArgs>(args: SelectSubset<T, BusinessEntityCreateArgs<ExtArgs>>): Prisma__BusinessEntityClient<$Result.GetResult<Prisma.$BusinessEntityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BusinessEntities.
     * @param {BusinessEntityCreateManyArgs} args - Arguments to create many BusinessEntities.
     * @example
     * // Create many BusinessEntities
     * const businessEntity = await prisma.businessEntity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessEntityCreateManyArgs>(args?: SelectSubset<T, BusinessEntityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BusinessEntities and returns the data saved in the database.
     * @param {BusinessEntityCreateManyAndReturnArgs} args - Arguments to create many BusinessEntities.
     * @example
     * // Create many BusinessEntities
     * const businessEntity = await prisma.businessEntity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BusinessEntities and only return the `id`
     * const businessEntityWithIdOnly = await prisma.businessEntity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusinessEntityCreateManyAndReturnArgs>(args?: SelectSubset<T, BusinessEntityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessEntityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BusinessEntity.
     * @param {BusinessEntityDeleteArgs} args - Arguments to delete one BusinessEntity.
     * @example
     * // Delete one BusinessEntity
     * const BusinessEntity = await prisma.businessEntity.delete({
     *   where: {
     *     // ... filter to delete one BusinessEntity
     *   }
     * })
     * 
     */
    delete<T extends BusinessEntityDeleteArgs>(args: SelectSubset<T, BusinessEntityDeleteArgs<ExtArgs>>): Prisma__BusinessEntityClient<$Result.GetResult<Prisma.$BusinessEntityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BusinessEntity.
     * @param {BusinessEntityUpdateArgs} args - Arguments to update one BusinessEntity.
     * @example
     * // Update one BusinessEntity
     * const businessEntity = await prisma.businessEntity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessEntityUpdateArgs>(args: SelectSubset<T, BusinessEntityUpdateArgs<ExtArgs>>): Prisma__BusinessEntityClient<$Result.GetResult<Prisma.$BusinessEntityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BusinessEntities.
     * @param {BusinessEntityDeleteManyArgs} args - Arguments to filter BusinessEntities to delete.
     * @example
     * // Delete a few BusinessEntities
     * const { count } = await prisma.businessEntity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessEntityDeleteManyArgs>(args?: SelectSubset<T, BusinessEntityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessEntities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessEntityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusinessEntities
     * const businessEntity = await prisma.businessEntity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessEntityUpdateManyArgs>(args: SelectSubset<T, BusinessEntityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessEntities and returns the data updated in the database.
     * @param {BusinessEntityUpdateManyAndReturnArgs} args - Arguments to update many BusinessEntities.
     * @example
     * // Update many BusinessEntities
     * const businessEntity = await prisma.businessEntity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BusinessEntities and only return the `id`
     * const businessEntityWithIdOnly = await prisma.businessEntity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BusinessEntityUpdateManyAndReturnArgs>(args: SelectSubset<T, BusinessEntityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessEntityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BusinessEntity.
     * @param {BusinessEntityUpsertArgs} args - Arguments to update or create a BusinessEntity.
     * @example
     * // Update or create a BusinessEntity
     * const businessEntity = await prisma.businessEntity.upsert({
     *   create: {
     *     // ... data to create a BusinessEntity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusinessEntity we want to update
     *   }
     * })
     */
    upsert<T extends BusinessEntityUpsertArgs>(args: SelectSubset<T, BusinessEntityUpsertArgs<ExtArgs>>): Prisma__BusinessEntityClient<$Result.GetResult<Prisma.$BusinessEntityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BusinessEntities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessEntityCountArgs} args - Arguments to filter BusinessEntities to count.
     * @example
     * // Count the number of BusinessEntities
     * const count = await prisma.businessEntity.count({
     *   where: {
     *     // ... the filter for the BusinessEntities we want to count
     *   }
     * })
    **/
    count<T extends BusinessEntityCountArgs>(
      args?: Subset<T, BusinessEntityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessEntityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusinessEntity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessEntityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusinessEntityAggregateArgs>(args: Subset<T, BusinessEntityAggregateArgs>): Prisma.PrismaPromise<GetBusinessEntityAggregateType<T>>

    /**
     * Group by BusinessEntity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessEntityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusinessEntityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessEntityGroupByArgs['orderBy'] }
        : { orderBy?: BusinessEntityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusinessEntityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessEntityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BusinessEntity model
   */
  readonly fields: BusinessEntityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BusinessEntity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessEntityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    documents<T extends BusinessEntity$documentsArgs<ExtArgs> = {}>(args?: Subset<T, BusinessEntity$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BusinessEntity model
   */
  interface BusinessEntityFieldRefs {
    readonly id: FieldRef<"BusinessEntity", 'Int'>
    readonly type: FieldRef<"BusinessEntity", 'EntityType'>
    readonly ownerId: FieldRef<"BusinessEntity", 'Int'>
    readonly name: FieldRef<"BusinessEntity", 'String'>
    readonly trn: FieldRef<"BusinessEntity", 'String'>
    readonly description: FieldRef<"BusinessEntity", 'String'>
    readonly note: FieldRef<"BusinessEntity", 'String'>
    readonly defaultMarkup: FieldRef<"BusinessEntity", 'Decimal'>
    readonly standardMarkup: FieldRef<"BusinessEntity", 'Decimal'>
    readonly website: FieldRef<"BusinessEntity", 'String'>
    readonly street1: FieldRef<"BusinessEntity", 'String'>
    readonly street2: FieldRef<"BusinessEntity", 'String'>
    readonly city: FieldRef<"BusinessEntity", 'String'>
    readonly state: FieldRef<"BusinessEntity", 'String'>
    readonly country: FieldRef<"BusinessEntity", 'String'>
    readonly zip: FieldRef<"BusinessEntity", 'String'>
    readonly contactTitle: FieldRef<"BusinessEntity", 'String'>
    readonly contactFirstName: FieldRef<"BusinessEntity", 'String'>
    readonly contactMiddleName: FieldRef<"BusinessEntity", 'String'>
    readonly contactLastName: FieldRef<"BusinessEntity", 'String'>
    readonly contactPhone: FieldRef<"BusinessEntity", 'String'>
    readonly contactEmail: FieldRef<"BusinessEntity", 'String'>
    readonly creditLimit: FieldRef<"BusinessEntity", 'Decimal'>
    readonly openBalance: FieldRef<"BusinessEntity", 'Decimal'>
    readonly totalOverdue: FieldRef<"BusinessEntity", 'Decimal'>
    readonly status: FieldRef<"BusinessEntity", 'EntityStatus'>
    readonly image: FieldRef<"BusinessEntity", 'String'>
    readonly createdAt: FieldRef<"BusinessEntity", 'DateTime'>
    readonly updatedAt: FieldRef<"BusinessEntity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BusinessEntity findUnique
   */
  export type BusinessEntityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessEntity
     */
    select?: BusinessEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessEntity
     */
    omit?: BusinessEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessEntityInclude<ExtArgs> | null
    /**
     * Filter, which BusinessEntity to fetch.
     */
    where: BusinessEntityWhereUniqueInput
  }

  /**
   * BusinessEntity findUniqueOrThrow
   */
  export type BusinessEntityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessEntity
     */
    select?: BusinessEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessEntity
     */
    omit?: BusinessEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessEntityInclude<ExtArgs> | null
    /**
     * Filter, which BusinessEntity to fetch.
     */
    where: BusinessEntityWhereUniqueInput
  }

  /**
   * BusinessEntity findFirst
   */
  export type BusinessEntityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessEntity
     */
    select?: BusinessEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessEntity
     */
    omit?: BusinessEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessEntityInclude<ExtArgs> | null
    /**
     * Filter, which BusinessEntity to fetch.
     */
    where?: BusinessEntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessEntities to fetch.
     */
    orderBy?: BusinessEntityOrderByWithRelationInput | BusinessEntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessEntities.
     */
    cursor?: BusinessEntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessEntities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessEntities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessEntities.
     */
    distinct?: BusinessEntityScalarFieldEnum | BusinessEntityScalarFieldEnum[]
  }

  /**
   * BusinessEntity findFirstOrThrow
   */
  export type BusinessEntityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessEntity
     */
    select?: BusinessEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessEntity
     */
    omit?: BusinessEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessEntityInclude<ExtArgs> | null
    /**
     * Filter, which BusinessEntity to fetch.
     */
    where?: BusinessEntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessEntities to fetch.
     */
    orderBy?: BusinessEntityOrderByWithRelationInput | BusinessEntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessEntities.
     */
    cursor?: BusinessEntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessEntities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessEntities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessEntities.
     */
    distinct?: BusinessEntityScalarFieldEnum | BusinessEntityScalarFieldEnum[]
  }

  /**
   * BusinessEntity findMany
   */
  export type BusinessEntityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessEntity
     */
    select?: BusinessEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessEntity
     */
    omit?: BusinessEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessEntityInclude<ExtArgs> | null
    /**
     * Filter, which BusinessEntities to fetch.
     */
    where?: BusinessEntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessEntities to fetch.
     */
    orderBy?: BusinessEntityOrderByWithRelationInput | BusinessEntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusinessEntities.
     */
    cursor?: BusinessEntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessEntities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessEntities.
     */
    skip?: number
    distinct?: BusinessEntityScalarFieldEnum | BusinessEntityScalarFieldEnum[]
  }

  /**
   * BusinessEntity create
   */
  export type BusinessEntityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessEntity
     */
    select?: BusinessEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessEntity
     */
    omit?: BusinessEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessEntityInclude<ExtArgs> | null
    /**
     * The data needed to create a BusinessEntity.
     */
    data: XOR<BusinessEntityCreateInput, BusinessEntityUncheckedCreateInput>
  }

  /**
   * BusinessEntity createMany
   */
  export type BusinessEntityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BusinessEntities.
     */
    data: BusinessEntityCreateManyInput | BusinessEntityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BusinessEntity createManyAndReturn
   */
  export type BusinessEntityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessEntity
     */
    select?: BusinessEntitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessEntity
     */
    omit?: BusinessEntityOmit<ExtArgs> | null
    /**
     * The data used to create many BusinessEntities.
     */
    data: BusinessEntityCreateManyInput | BusinessEntityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessEntityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BusinessEntity update
   */
  export type BusinessEntityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessEntity
     */
    select?: BusinessEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessEntity
     */
    omit?: BusinessEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessEntityInclude<ExtArgs> | null
    /**
     * The data needed to update a BusinessEntity.
     */
    data: XOR<BusinessEntityUpdateInput, BusinessEntityUncheckedUpdateInput>
    /**
     * Choose, which BusinessEntity to update.
     */
    where: BusinessEntityWhereUniqueInput
  }

  /**
   * BusinessEntity updateMany
   */
  export type BusinessEntityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BusinessEntities.
     */
    data: XOR<BusinessEntityUpdateManyMutationInput, BusinessEntityUncheckedUpdateManyInput>
    /**
     * Filter which BusinessEntities to update
     */
    where?: BusinessEntityWhereInput
    /**
     * Limit how many BusinessEntities to update.
     */
    limit?: number
  }

  /**
   * BusinessEntity updateManyAndReturn
   */
  export type BusinessEntityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessEntity
     */
    select?: BusinessEntitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessEntity
     */
    omit?: BusinessEntityOmit<ExtArgs> | null
    /**
     * The data used to update BusinessEntities.
     */
    data: XOR<BusinessEntityUpdateManyMutationInput, BusinessEntityUncheckedUpdateManyInput>
    /**
     * Filter which BusinessEntities to update
     */
    where?: BusinessEntityWhereInput
    /**
     * Limit how many BusinessEntities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessEntityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BusinessEntity upsert
   */
  export type BusinessEntityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessEntity
     */
    select?: BusinessEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessEntity
     */
    omit?: BusinessEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessEntityInclude<ExtArgs> | null
    /**
     * The filter to search for the BusinessEntity to update in case it exists.
     */
    where: BusinessEntityWhereUniqueInput
    /**
     * In case the BusinessEntity found by the `where` argument doesn't exist, create a new BusinessEntity with this data.
     */
    create: XOR<BusinessEntityCreateInput, BusinessEntityUncheckedCreateInput>
    /**
     * In case the BusinessEntity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessEntityUpdateInput, BusinessEntityUncheckedUpdateInput>
  }

  /**
   * BusinessEntity delete
   */
  export type BusinessEntityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessEntity
     */
    select?: BusinessEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessEntity
     */
    omit?: BusinessEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessEntityInclude<ExtArgs> | null
    /**
     * Filter which BusinessEntity to delete.
     */
    where: BusinessEntityWhereUniqueInput
  }

  /**
   * BusinessEntity deleteMany
   */
  export type BusinessEntityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessEntities to delete
     */
    where?: BusinessEntityWhereInput
    /**
     * Limit how many BusinessEntities to delete.
     */
    limit?: number
  }

  /**
   * BusinessEntity.documents
   */
  export type BusinessEntity$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * BusinessEntity without action
   */
  export type BusinessEntityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessEntity
     */
    select?: BusinessEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessEntity
     */
    omit?: BusinessEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessEntityInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    ownerId: number | null
    costPrice: Decimal | null
    quantity: Decimal | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    ownerId: number | null
    costPrice: Decimal | null
    quantity: Decimal | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    ownerId: number | null
    name: string | null
    sku: string | null
    barcode: string | null
    description: string | null
    costPrice: Decimal | null
    unitOfMeasurement: $Enums.Measurements | null
    quantity: Decimal | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    ownerId: number | null
    name: string | null
    sku: string | null
    barcode: string | null
    description: string | null
    costPrice: Decimal | null
    unitOfMeasurement: $Enums.Measurements | null
    quantity: Decimal | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    ownerId: number
    name: number
    sku: number
    barcode: number
    description: number
    costPrice: number
    unitOfMeasurement: number
    quantity: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    ownerId?: true
    costPrice?: true
    quantity?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    ownerId?: true
    costPrice?: true
    quantity?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    ownerId?: true
    name?: true
    sku?: true
    barcode?: true
    description?: true
    costPrice?: true
    unitOfMeasurement?: true
    quantity?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    ownerId?: true
    name?: true
    sku?: true
    barcode?: true
    description?: true
    costPrice?: true
    unitOfMeasurement?: true
    quantity?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    ownerId?: true
    name?: true
    sku?: true
    barcode?: true
    description?: true
    costPrice?: true
    unitOfMeasurement?: true
    quantity?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    ownerId: number
    name: string
    sku: string
    barcode: string
    description: string | null
    costPrice: Decimal
    unitOfMeasurement: $Enums.Measurements
    quantity: Decimal
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    name?: boolean
    sku?: boolean
    barcode?: boolean
    description?: boolean
    costPrice?: boolean
    unitOfMeasurement?: boolean
    quantity?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    documents?: boolean | Product$documentsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    name?: boolean
    sku?: boolean
    barcode?: boolean
    description?: boolean
    costPrice?: boolean
    unitOfMeasurement?: boolean
    quantity?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    name?: boolean
    sku?: boolean
    barcode?: boolean
    description?: boolean
    costPrice?: boolean
    unitOfMeasurement?: boolean
    quantity?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    ownerId?: boolean
    name?: boolean
    sku?: boolean
    barcode?: boolean
    description?: boolean
    costPrice?: boolean
    unitOfMeasurement?: boolean
    quantity?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "name" | "sku" | "barcode" | "description" | "costPrice" | "unitOfMeasurement" | "quantity" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    documents?: boolean | Product$documentsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      documents: Prisma.$DocumentProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ownerId: number
      name: string
      sku: string
      barcode: string
      description: string | null
      costPrice: Prisma.Decimal
      unitOfMeasurement: $Enums.Measurements
      quantity: Prisma.Decimal
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    documents<T extends Product$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Product$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly ownerId: FieldRef<"Product", 'Int'>
    readonly name: FieldRef<"Product", 'String'>
    readonly sku: FieldRef<"Product", 'String'>
    readonly barcode: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly costPrice: FieldRef<"Product", 'Decimal'>
    readonly unitOfMeasurement: FieldRef<"Product", 'Measurements'>
    readonly quantity: FieldRef<"Product", 'Decimal'>
    readonly image: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.documents
   */
  export type Product$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentProduct
     */
    select?: DocumentProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentProduct
     */
    omit?: DocumentProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentProductInclude<ExtArgs> | null
    where?: DocumentProductWhereInput
    orderBy?: DocumentProductOrderByWithRelationInput | DocumentProductOrderByWithRelationInput[]
    cursor?: DocumentProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentProductScalarFieldEnum | DocumentProductScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentAvgAggregateOutputType = {
    id: number | null
    ownerId: number | null
    businessEntityId: number | null
    vatAmount: Decimal | null
    vatRate: Decimal | null
    amountBeforeVat: Decimal | null
    amountAfterVat: Decimal | null
    taxWithheldAmount: Decimal | null
    withHoldingTaxRate: Decimal | null
    withHoldingTaxAmount: Decimal | null
  }

  export type DocumentSumAggregateOutputType = {
    id: number | null
    ownerId: number | null
    businessEntityId: number | null
    vatAmount: Decimal | null
    vatRate: Decimal | null
    amountBeforeVat: Decimal | null
    amountAfterVat: Decimal | null
    taxWithheldAmount: Decimal | null
    withHoldingTaxRate: Decimal | null
    withHoldingTaxAmount: Decimal | null
  }

  export type DocumentMinAggregateOutputType = {
    id: number | null
    ownerId: number | null
    businessEntityId: number | null
    documentCode: string | null
    documentType: $Enums.DocumentTypes | null
    documentStatus: $Enums.DocumentStatus | null
    paymentStatus: $Enums.PaymentStatus | null
    date: Date | null
    dueDate: Date | null
    vatAmount: Decimal | null
    vatRate: Decimal | null
    amountBeforeVat: Decimal | null
    amountAfterVat: Decimal | null
    taxWithheldAmount: Decimal | null
    withHoldingTaxRate: Decimal | null
    withHoldingTaxAmount: Decimal | null
    note: string | null
    memorandum: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: number | null
    ownerId: number | null
    businessEntityId: number | null
    documentCode: string | null
    documentType: $Enums.DocumentTypes | null
    documentStatus: $Enums.DocumentStatus | null
    paymentStatus: $Enums.PaymentStatus | null
    date: Date | null
    dueDate: Date | null
    vatAmount: Decimal | null
    vatRate: Decimal | null
    amountBeforeVat: Decimal | null
    amountAfterVat: Decimal | null
    taxWithheldAmount: Decimal | null
    withHoldingTaxRate: Decimal | null
    withHoldingTaxAmount: Decimal | null
    note: string | null
    memorandum: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    ownerId: number
    businessEntityId: number
    documentCode: number
    documentType: number
    documentStatus: number
    paymentStatus: number
    date: number
    dueDate: number
    vatAmount: number
    vatRate: number
    amountBeforeVat: number
    amountAfterVat: number
    taxWithheldAmount: number
    withHoldingTaxRate: number
    withHoldingTaxAmount: number
    note: number
    memorandum: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DocumentAvgAggregateInputType = {
    id?: true
    ownerId?: true
    businessEntityId?: true
    vatAmount?: true
    vatRate?: true
    amountBeforeVat?: true
    amountAfterVat?: true
    taxWithheldAmount?: true
    withHoldingTaxRate?: true
    withHoldingTaxAmount?: true
  }

  export type DocumentSumAggregateInputType = {
    id?: true
    ownerId?: true
    businessEntityId?: true
    vatAmount?: true
    vatRate?: true
    amountBeforeVat?: true
    amountAfterVat?: true
    taxWithheldAmount?: true
    withHoldingTaxRate?: true
    withHoldingTaxAmount?: true
  }

  export type DocumentMinAggregateInputType = {
    id?: true
    ownerId?: true
    businessEntityId?: true
    documentCode?: true
    documentType?: true
    documentStatus?: true
    paymentStatus?: true
    date?: true
    dueDate?: true
    vatAmount?: true
    vatRate?: true
    amountBeforeVat?: true
    amountAfterVat?: true
    taxWithheldAmount?: true
    withHoldingTaxRate?: true
    withHoldingTaxAmount?: true
    note?: true
    memorandum?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    ownerId?: true
    businessEntityId?: true
    documentCode?: true
    documentType?: true
    documentStatus?: true
    paymentStatus?: true
    date?: true
    dueDate?: true
    vatAmount?: true
    vatRate?: true
    amountBeforeVat?: true
    amountAfterVat?: true
    taxWithheldAmount?: true
    withHoldingTaxRate?: true
    withHoldingTaxAmount?: true
    note?: true
    memorandum?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    ownerId?: true
    businessEntityId?: true
    documentCode?: true
    documentType?: true
    documentStatus?: true
    paymentStatus?: true
    date?: true
    dueDate?: true
    vatAmount?: true
    vatRate?: true
    amountBeforeVat?: true
    amountAfterVat?: true
    taxWithheldAmount?: true
    withHoldingTaxRate?: true
    withHoldingTaxAmount?: true
    note?: true
    memorandum?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _avg?: DocumentAvgAggregateInputType
    _sum?: DocumentSumAggregateInputType
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: number
    ownerId: number
    businessEntityId: number
    documentCode: string
    documentType: $Enums.DocumentTypes
    documentStatus: $Enums.DocumentStatus
    paymentStatus: $Enums.PaymentStatus
    date: Date
    dueDate: Date
    vatAmount: Decimal
    vatRate: Decimal
    amountBeforeVat: Decimal
    amountAfterVat: Decimal
    taxWithheldAmount: Decimal | null
    withHoldingTaxRate: Decimal | null
    withHoldingTaxAmount: Decimal | null
    note: string | null
    memorandum: string | null
    createdAt: Date
    updatedAt: Date
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    businessEntityId?: boolean
    documentCode?: boolean
    documentType?: boolean
    documentStatus?: boolean
    paymentStatus?: boolean
    date?: boolean
    dueDate?: boolean
    vatAmount?: boolean
    vatRate?: boolean
    amountBeforeVat?: boolean
    amountAfterVat?: boolean
    taxWithheldAmount?: boolean
    withHoldingTaxRate?: boolean
    withHoldingTaxAmount?: boolean
    note?: boolean
    memorandum?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    businessEntity?: boolean | BusinessEntityDefaultArgs<ExtArgs>
    products?: boolean | Document$productsArgs<ExtArgs>
    _count?: boolean | DocumentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    businessEntityId?: boolean
    documentCode?: boolean
    documentType?: boolean
    documentStatus?: boolean
    paymentStatus?: boolean
    date?: boolean
    dueDate?: boolean
    vatAmount?: boolean
    vatRate?: boolean
    amountBeforeVat?: boolean
    amountAfterVat?: boolean
    taxWithheldAmount?: boolean
    withHoldingTaxRate?: boolean
    withHoldingTaxAmount?: boolean
    note?: boolean
    memorandum?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    businessEntity?: boolean | BusinessEntityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    businessEntityId?: boolean
    documentCode?: boolean
    documentType?: boolean
    documentStatus?: boolean
    paymentStatus?: boolean
    date?: boolean
    dueDate?: boolean
    vatAmount?: boolean
    vatRate?: boolean
    amountBeforeVat?: boolean
    amountAfterVat?: boolean
    taxWithheldAmount?: boolean
    withHoldingTaxRate?: boolean
    withHoldingTaxAmount?: boolean
    note?: boolean
    memorandum?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    businessEntity?: boolean | BusinessEntityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectScalar = {
    id?: boolean
    ownerId?: boolean
    businessEntityId?: boolean
    documentCode?: boolean
    documentType?: boolean
    documentStatus?: boolean
    paymentStatus?: boolean
    date?: boolean
    dueDate?: boolean
    vatAmount?: boolean
    vatRate?: boolean
    amountBeforeVat?: boolean
    amountAfterVat?: boolean
    taxWithheldAmount?: boolean
    withHoldingTaxRate?: boolean
    withHoldingTaxAmount?: boolean
    note?: boolean
    memorandum?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "businessEntityId" | "documentCode" | "documentType" | "documentStatus" | "paymentStatus" | "date" | "dueDate" | "vatAmount" | "vatRate" | "amountBeforeVat" | "amountAfterVat" | "taxWithheldAmount" | "withHoldingTaxRate" | "withHoldingTaxAmount" | "note" | "memorandum" | "createdAt" | "updatedAt", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    businessEntity?: boolean | BusinessEntityDefaultArgs<ExtArgs>
    products?: boolean | Document$productsArgs<ExtArgs>
    _count?: boolean | DocumentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    businessEntity?: boolean | BusinessEntityDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    businessEntity?: boolean | BusinessEntityDefaultArgs<ExtArgs>
  }

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      businessEntity: Prisma.$BusinessEntityPayload<ExtArgs>
      products: Prisma.$DocumentProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ownerId: number
      businessEntityId: number
      documentCode: string
      documentType: $Enums.DocumentTypes
      documentStatus: $Enums.DocumentStatus
      paymentStatus: $Enums.PaymentStatus
      date: Date
      dueDate: Date
      vatAmount: Prisma.Decimal
      vatRate: Prisma.Decimal
      amountBeforeVat: Prisma.Decimal
      amountAfterVat: Prisma.Decimal
      taxWithheldAmount: Prisma.Decimal | null
      withHoldingTaxRate: Prisma.Decimal | null
      withHoldingTaxAmount: Prisma.Decimal | null
      note: string | null
      memorandum: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {DocumentUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    businessEntity<T extends BusinessEntityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessEntityDefaultArgs<ExtArgs>>): Prisma__BusinessEntityClient<$Result.GetResult<Prisma.$BusinessEntityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    products<T extends Document$productsArgs<ExtArgs> = {}>(args?: Subset<T, Document$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Document model
   */
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'Int'>
    readonly ownerId: FieldRef<"Document", 'Int'>
    readonly businessEntityId: FieldRef<"Document", 'Int'>
    readonly documentCode: FieldRef<"Document", 'String'>
    readonly documentType: FieldRef<"Document", 'DocumentTypes'>
    readonly documentStatus: FieldRef<"Document", 'DocumentStatus'>
    readonly paymentStatus: FieldRef<"Document", 'PaymentStatus'>
    readonly date: FieldRef<"Document", 'DateTime'>
    readonly dueDate: FieldRef<"Document", 'DateTime'>
    readonly vatAmount: FieldRef<"Document", 'Decimal'>
    readonly vatRate: FieldRef<"Document", 'Decimal'>
    readonly amountBeforeVat: FieldRef<"Document", 'Decimal'>
    readonly amountAfterVat: FieldRef<"Document", 'Decimal'>
    readonly taxWithheldAmount: FieldRef<"Document", 'Decimal'>
    readonly withHoldingTaxRate: FieldRef<"Document", 'Decimal'>
    readonly withHoldingTaxAmount: FieldRef<"Document", 'Decimal'>
    readonly note: FieldRef<"Document", 'String'>
    readonly memorandum: FieldRef<"Document", 'String'>
    readonly createdAt: FieldRef<"Document", 'DateTime'>
    readonly updatedAt: FieldRef<"Document", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document createManyAndReturn
   */
  export type DocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document updateManyAndReturn
   */
  export type DocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document.products
   */
  export type Document$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentProduct
     */
    select?: DocumentProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentProduct
     */
    omit?: DocumentProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentProductInclude<ExtArgs> | null
    where?: DocumentProductWhereInput
    orderBy?: DocumentProductOrderByWithRelationInput | DocumentProductOrderByWithRelationInput[]
    cursor?: DocumentProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentProductScalarFieldEnum | DocumentProductScalarFieldEnum[]
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Model DocumentProduct
   */

  export type AggregateDocumentProduct = {
    _count: DocumentProductCountAggregateOutputType | null
    _avg: DocumentProductAvgAggregateOutputType | null
    _sum: DocumentProductSumAggregateOutputType | null
    _min: DocumentProductMinAggregateOutputType | null
    _max: DocumentProductMaxAggregateOutputType | null
  }

  export type DocumentProductAvgAggregateOutputType = {
    id: number | null
    documentId: number | null
    productId: number | null
    sellingPrice: Decimal | null
    quantity: Decimal | null
  }

  export type DocumentProductSumAggregateOutputType = {
    id: number | null
    documentId: number | null
    productId: number | null
    sellingPrice: Decimal | null
    quantity: Decimal | null
  }

  export type DocumentProductMinAggregateOutputType = {
    id: number | null
    documentId: number | null
    productId: number | null
    name: string | null
    sku: string | null
    barcode: string | null
    description: string | null
    sellingPrice: Decimal | null
    unitOfMeasurement: $Enums.Measurements | null
    quantity: Decimal | null
  }

  export type DocumentProductMaxAggregateOutputType = {
    id: number | null
    documentId: number | null
    productId: number | null
    name: string | null
    sku: string | null
    barcode: string | null
    description: string | null
    sellingPrice: Decimal | null
    unitOfMeasurement: $Enums.Measurements | null
    quantity: Decimal | null
  }

  export type DocumentProductCountAggregateOutputType = {
    id: number
    documentId: number
    productId: number
    name: number
    sku: number
    barcode: number
    description: number
    sellingPrice: number
    unitOfMeasurement: number
    quantity: number
    _all: number
  }


  export type DocumentProductAvgAggregateInputType = {
    id?: true
    documentId?: true
    productId?: true
    sellingPrice?: true
    quantity?: true
  }

  export type DocumentProductSumAggregateInputType = {
    id?: true
    documentId?: true
    productId?: true
    sellingPrice?: true
    quantity?: true
  }

  export type DocumentProductMinAggregateInputType = {
    id?: true
    documentId?: true
    productId?: true
    name?: true
    sku?: true
    barcode?: true
    description?: true
    sellingPrice?: true
    unitOfMeasurement?: true
    quantity?: true
  }

  export type DocumentProductMaxAggregateInputType = {
    id?: true
    documentId?: true
    productId?: true
    name?: true
    sku?: true
    barcode?: true
    description?: true
    sellingPrice?: true
    unitOfMeasurement?: true
    quantity?: true
  }

  export type DocumentProductCountAggregateInputType = {
    id?: true
    documentId?: true
    productId?: true
    name?: true
    sku?: true
    barcode?: true
    description?: true
    sellingPrice?: true
    unitOfMeasurement?: true
    quantity?: true
    _all?: true
  }

  export type DocumentProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentProduct to aggregate.
     */
    where?: DocumentProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentProducts to fetch.
     */
    orderBy?: DocumentProductOrderByWithRelationInput | DocumentProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocumentProducts
    **/
    _count?: true | DocumentProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentProductMaxAggregateInputType
  }

  export type GetDocumentProductAggregateType<T extends DocumentProductAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentProduct[P]>
      : GetScalarType<T[P], AggregateDocumentProduct[P]>
  }




  export type DocumentProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentProductWhereInput
    orderBy?: DocumentProductOrderByWithAggregationInput | DocumentProductOrderByWithAggregationInput[]
    by: DocumentProductScalarFieldEnum[] | DocumentProductScalarFieldEnum
    having?: DocumentProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentProductCountAggregateInputType | true
    _avg?: DocumentProductAvgAggregateInputType
    _sum?: DocumentProductSumAggregateInputType
    _min?: DocumentProductMinAggregateInputType
    _max?: DocumentProductMaxAggregateInputType
  }

  export type DocumentProductGroupByOutputType = {
    id: number
    documentId: number
    productId: number
    name: string
    sku: string
    barcode: string
    description: string | null
    sellingPrice: Decimal
    unitOfMeasurement: $Enums.Measurements
    quantity: Decimal
    _count: DocumentProductCountAggregateOutputType | null
    _avg: DocumentProductAvgAggregateOutputType | null
    _sum: DocumentProductSumAggregateOutputType | null
    _min: DocumentProductMinAggregateOutputType | null
    _max: DocumentProductMaxAggregateOutputType | null
  }

  type GetDocumentProductGroupByPayload<T extends DocumentProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentProductGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentProductGroupByOutputType[P]>
        }
      >
    >


  export type DocumentProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    productId?: boolean
    name?: boolean
    sku?: boolean
    barcode?: boolean
    description?: boolean
    sellingPrice?: boolean
    unitOfMeasurement?: boolean
    quantity?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentProduct"]>

  export type DocumentProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    productId?: boolean
    name?: boolean
    sku?: boolean
    barcode?: boolean
    description?: boolean
    sellingPrice?: boolean
    unitOfMeasurement?: boolean
    quantity?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentProduct"]>

  export type DocumentProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    productId?: boolean
    name?: boolean
    sku?: boolean
    barcode?: boolean
    description?: boolean
    sellingPrice?: boolean
    unitOfMeasurement?: boolean
    quantity?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentProduct"]>

  export type DocumentProductSelectScalar = {
    id?: boolean
    documentId?: boolean
    productId?: boolean
    name?: boolean
    sku?: boolean
    barcode?: boolean
    description?: boolean
    sellingPrice?: boolean
    unitOfMeasurement?: boolean
    quantity?: boolean
  }

  export type DocumentProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentId" | "productId" | "name" | "sku" | "barcode" | "description" | "sellingPrice" | "unitOfMeasurement" | "quantity", ExtArgs["result"]["documentProduct"]>
  export type DocumentProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type DocumentProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type DocumentProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $DocumentProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentProduct"
    objects: {
      document: Prisma.$DocumentPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      documentId: number
      productId: number
      name: string
      sku: string
      barcode: string
      description: string | null
      sellingPrice: Prisma.Decimal
      unitOfMeasurement: $Enums.Measurements
      quantity: Prisma.Decimal
    }, ExtArgs["result"]["documentProduct"]>
    composites: {}
  }

  type DocumentProductGetPayload<S extends boolean | null | undefined | DocumentProductDefaultArgs> = $Result.GetResult<Prisma.$DocumentProductPayload, S>

  type DocumentProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentProductCountAggregateInputType | true
    }

  export interface DocumentProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocumentProduct'], meta: { name: 'DocumentProduct' } }
    /**
     * Find zero or one DocumentProduct that matches the filter.
     * @param {DocumentProductFindUniqueArgs} args - Arguments to find a DocumentProduct
     * @example
     * // Get one DocumentProduct
     * const documentProduct = await prisma.documentProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentProductFindUniqueArgs>(args: SelectSubset<T, DocumentProductFindUniqueArgs<ExtArgs>>): Prisma__DocumentProductClient<$Result.GetResult<Prisma.$DocumentProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DocumentProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentProductFindUniqueOrThrowArgs} args - Arguments to find a DocumentProduct
     * @example
     * // Get one DocumentProduct
     * const documentProduct = await prisma.documentProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentProductFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentProductClient<$Result.GetResult<Prisma.$DocumentProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentProductFindFirstArgs} args - Arguments to find a DocumentProduct
     * @example
     * // Get one DocumentProduct
     * const documentProduct = await prisma.documentProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentProductFindFirstArgs>(args?: SelectSubset<T, DocumentProductFindFirstArgs<ExtArgs>>): Prisma__DocumentProductClient<$Result.GetResult<Prisma.$DocumentProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentProductFindFirstOrThrowArgs} args - Arguments to find a DocumentProduct
     * @example
     * // Get one DocumentProduct
     * const documentProduct = await prisma.documentProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentProductFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentProductClient<$Result.GetResult<Prisma.$DocumentProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocumentProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentProducts
     * const documentProducts = await prisma.documentProduct.findMany()
     * 
     * // Get first 10 DocumentProducts
     * const documentProducts = await prisma.documentProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentProductWithIdOnly = await prisma.documentProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentProductFindManyArgs>(args?: SelectSubset<T, DocumentProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DocumentProduct.
     * @param {DocumentProductCreateArgs} args - Arguments to create a DocumentProduct.
     * @example
     * // Create one DocumentProduct
     * const DocumentProduct = await prisma.documentProduct.create({
     *   data: {
     *     // ... data to create a DocumentProduct
     *   }
     * })
     * 
     */
    create<T extends DocumentProductCreateArgs>(args: SelectSubset<T, DocumentProductCreateArgs<ExtArgs>>): Prisma__DocumentProductClient<$Result.GetResult<Prisma.$DocumentProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DocumentProducts.
     * @param {DocumentProductCreateManyArgs} args - Arguments to create many DocumentProducts.
     * @example
     * // Create many DocumentProducts
     * const documentProduct = await prisma.documentProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentProductCreateManyArgs>(args?: SelectSubset<T, DocumentProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DocumentProducts and returns the data saved in the database.
     * @param {DocumentProductCreateManyAndReturnArgs} args - Arguments to create many DocumentProducts.
     * @example
     * // Create many DocumentProducts
     * const documentProduct = await prisma.documentProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DocumentProducts and only return the `id`
     * const documentProductWithIdOnly = await prisma.documentProduct.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentProductCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DocumentProduct.
     * @param {DocumentProductDeleteArgs} args - Arguments to delete one DocumentProduct.
     * @example
     * // Delete one DocumentProduct
     * const DocumentProduct = await prisma.documentProduct.delete({
     *   where: {
     *     // ... filter to delete one DocumentProduct
     *   }
     * })
     * 
     */
    delete<T extends DocumentProductDeleteArgs>(args: SelectSubset<T, DocumentProductDeleteArgs<ExtArgs>>): Prisma__DocumentProductClient<$Result.GetResult<Prisma.$DocumentProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DocumentProduct.
     * @param {DocumentProductUpdateArgs} args - Arguments to update one DocumentProduct.
     * @example
     * // Update one DocumentProduct
     * const documentProduct = await prisma.documentProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentProductUpdateArgs>(args: SelectSubset<T, DocumentProductUpdateArgs<ExtArgs>>): Prisma__DocumentProductClient<$Result.GetResult<Prisma.$DocumentProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DocumentProducts.
     * @param {DocumentProductDeleteManyArgs} args - Arguments to filter DocumentProducts to delete.
     * @example
     * // Delete a few DocumentProducts
     * const { count } = await prisma.documentProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentProductDeleteManyArgs>(args?: SelectSubset<T, DocumentProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentProducts
     * const documentProduct = await prisma.documentProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentProductUpdateManyArgs>(args: SelectSubset<T, DocumentProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentProducts and returns the data updated in the database.
     * @param {DocumentProductUpdateManyAndReturnArgs} args - Arguments to update many DocumentProducts.
     * @example
     * // Update many DocumentProducts
     * const documentProduct = await prisma.documentProduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DocumentProducts and only return the `id`
     * const documentProductWithIdOnly = await prisma.documentProduct.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentProductUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DocumentProduct.
     * @param {DocumentProductUpsertArgs} args - Arguments to update or create a DocumentProduct.
     * @example
     * // Update or create a DocumentProduct
     * const documentProduct = await prisma.documentProduct.upsert({
     *   create: {
     *     // ... data to create a DocumentProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentProduct we want to update
     *   }
     * })
     */
    upsert<T extends DocumentProductUpsertArgs>(args: SelectSubset<T, DocumentProductUpsertArgs<ExtArgs>>): Prisma__DocumentProductClient<$Result.GetResult<Prisma.$DocumentProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DocumentProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentProductCountArgs} args - Arguments to filter DocumentProducts to count.
     * @example
     * // Count the number of DocumentProducts
     * const count = await prisma.documentProduct.count({
     *   where: {
     *     // ... the filter for the DocumentProducts we want to count
     *   }
     * })
    **/
    count<T extends DocumentProductCountArgs>(
      args?: Subset<T, DocumentProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocumentProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentProductAggregateArgs>(args: Subset<T, DocumentProductAggregateArgs>): Prisma.PrismaPromise<GetDocumentProductAggregateType<T>>

    /**
     * Group by DocumentProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentProductGroupByArgs['orderBy'] }
        : { orderBy?: DocumentProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocumentProduct model
   */
  readonly fields: DocumentProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocumentProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document<T extends DocumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentDefaultArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DocumentProduct model
   */
  interface DocumentProductFieldRefs {
    readonly id: FieldRef<"DocumentProduct", 'Int'>
    readonly documentId: FieldRef<"DocumentProduct", 'Int'>
    readonly productId: FieldRef<"DocumentProduct", 'Int'>
    readonly name: FieldRef<"DocumentProduct", 'String'>
    readonly sku: FieldRef<"DocumentProduct", 'String'>
    readonly barcode: FieldRef<"DocumentProduct", 'String'>
    readonly description: FieldRef<"DocumentProduct", 'String'>
    readonly sellingPrice: FieldRef<"DocumentProduct", 'Decimal'>
    readonly unitOfMeasurement: FieldRef<"DocumentProduct", 'Measurements'>
    readonly quantity: FieldRef<"DocumentProduct", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * DocumentProduct findUnique
   */
  export type DocumentProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentProduct
     */
    select?: DocumentProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentProduct
     */
    omit?: DocumentProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentProductInclude<ExtArgs> | null
    /**
     * Filter, which DocumentProduct to fetch.
     */
    where: DocumentProductWhereUniqueInput
  }

  /**
   * DocumentProduct findUniqueOrThrow
   */
  export type DocumentProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentProduct
     */
    select?: DocumentProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentProduct
     */
    omit?: DocumentProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentProductInclude<ExtArgs> | null
    /**
     * Filter, which DocumentProduct to fetch.
     */
    where: DocumentProductWhereUniqueInput
  }

  /**
   * DocumentProduct findFirst
   */
  export type DocumentProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentProduct
     */
    select?: DocumentProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentProduct
     */
    omit?: DocumentProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentProductInclude<ExtArgs> | null
    /**
     * Filter, which DocumentProduct to fetch.
     */
    where?: DocumentProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentProducts to fetch.
     */
    orderBy?: DocumentProductOrderByWithRelationInput | DocumentProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentProducts.
     */
    cursor?: DocumentProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentProducts.
     */
    distinct?: DocumentProductScalarFieldEnum | DocumentProductScalarFieldEnum[]
  }

  /**
   * DocumentProduct findFirstOrThrow
   */
  export type DocumentProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentProduct
     */
    select?: DocumentProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentProduct
     */
    omit?: DocumentProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentProductInclude<ExtArgs> | null
    /**
     * Filter, which DocumentProduct to fetch.
     */
    where?: DocumentProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentProducts to fetch.
     */
    orderBy?: DocumentProductOrderByWithRelationInput | DocumentProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentProducts.
     */
    cursor?: DocumentProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentProducts.
     */
    distinct?: DocumentProductScalarFieldEnum | DocumentProductScalarFieldEnum[]
  }

  /**
   * DocumentProduct findMany
   */
  export type DocumentProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentProduct
     */
    select?: DocumentProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentProduct
     */
    omit?: DocumentProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentProductInclude<ExtArgs> | null
    /**
     * Filter, which DocumentProducts to fetch.
     */
    where?: DocumentProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentProducts to fetch.
     */
    orderBy?: DocumentProductOrderByWithRelationInput | DocumentProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocumentProducts.
     */
    cursor?: DocumentProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentProducts.
     */
    skip?: number
    distinct?: DocumentProductScalarFieldEnum | DocumentProductScalarFieldEnum[]
  }

  /**
   * DocumentProduct create
   */
  export type DocumentProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentProduct
     */
    select?: DocumentProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentProduct
     */
    omit?: DocumentProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentProductInclude<ExtArgs> | null
    /**
     * The data needed to create a DocumentProduct.
     */
    data: XOR<DocumentProductCreateInput, DocumentProductUncheckedCreateInput>
  }

  /**
   * DocumentProduct createMany
   */
  export type DocumentProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentProducts.
     */
    data: DocumentProductCreateManyInput | DocumentProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocumentProduct createManyAndReturn
   */
  export type DocumentProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentProduct
     */
    select?: DocumentProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentProduct
     */
    omit?: DocumentProductOmit<ExtArgs> | null
    /**
     * The data used to create many DocumentProducts.
     */
    data: DocumentProductCreateManyInput | DocumentProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentProduct update
   */
  export type DocumentProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentProduct
     */
    select?: DocumentProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentProduct
     */
    omit?: DocumentProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentProductInclude<ExtArgs> | null
    /**
     * The data needed to update a DocumentProduct.
     */
    data: XOR<DocumentProductUpdateInput, DocumentProductUncheckedUpdateInput>
    /**
     * Choose, which DocumentProduct to update.
     */
    where: DocumentProductWhereUniqueInput
  }

  /**
   * DocumentProduct updateMany
   */
  export type DocumentProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentProducts.
     */
    data: XOR<DocumentProductUpdateManyMutationInput, DocumentProductUncheckedUpdateManyInput>
    /**
     * Filter which DocumentProducts to update
     */
    where?: DocumentProductWhereInput
    /**
     * Limit how many DocumentProducts to update.
     */
    limit?: number
  }

  /**
   * DocumentProduct updateManyAndReturn
   */
  export type DocumentProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentProduct
     */
    select?: DocumentProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentProduct
     */
    omit?: DocumentProductOmit<ExtArgs> | null
    /**
     * The data used to update DocumentProducts.
     */
    data: XOR<DocumentProductUpdateManyMutationInput, DocumentProductUncheckedUpdateManyInput>
    /**
     * Filter which DocumentProducts to update
     */
    where?: DocumentProductWhereInput
    /**
     * Limit how many DocumentProducts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentProduct upsert
   */
  export type DocumentProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentProduct
     */
    select?: DocumentProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentProduct
     */
    omit?: DocumentProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentProductInclude<ExtArgs> | null
    /**
     * The filter to search for the DocumentProduct to update in case it exists.
     */
    where: DocumentProductWhereUniqueInput
    /**
     * In case the DocumentProduct found by the `where` argument doesn't exist, create a new DocumentProduct with this data.
     */
    create: XOR<DocumentProductCreateInput, DocumentProductUncheckedCreateInput>
    /**
     * In case the DocumentProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentProductUpdateInput, DocumentProductUncheckedUpdateInput>
  }

  /**
   * DocumentProduct delete
   */
  export type DocumentProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentProduct
     */
    select?: DocumentProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentProduct
     */
    omit?: DocumentProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentProductInclude<ExtArgs> | null
    /**
     * Filter which DocumentProduct to delete.
     */
    where: DocumentProductWhereUniqueInput
  }

  /**
   * DocumentProduct deleteMany
   */
  export type DocumentProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentProducts to delete
     */
    where?: DocumentProductWhereInput
    /**
     * Limit how many DocumentProducts to delete.
     */
    limit?: number
  }

  /**
   * DocumentProduct without action
   */
  export type DocumentProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentProduct
     */
    select?: DocumentProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentProduct
     */
    omit?: DocumentProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentProductInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    street1: 'street1',
    street2: 'street2',
    city: 'city',
    state: 'state',
    country: 'country',
    zip: 'zip',
    phone: 'phone',
    email: 'email',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    username: 'username',
    password: 'password',
    firstname: 'firstname',
    middlename: 'middlename',
    lastname: 'lastname',
    email: 'email',
    phone: 'phone',
    image: 'image',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BusinessEntityScalarFieldEnum: {
    id: 'id',
    type: 'type',
    ownerId: 'ownerId',
    name: 'name',
    trn: 'trn',
    description: 'description',
    note: 'note',
    defaultMarkup: 'defaultMarkup',
    standardMarkup: 'standardMarkup',
    website: 'website',
    street1: 'street1',
    street2: 'street2',
    city: 'city',
    state: 'state',
    country: 'country',
    zip: 'zip',
    contactTitle: 'contactTitle',
    contactFirstName: 'contactFirstName',
    contactMiddleName: 'contactMiddleName',
    contactLastName: 'contactLastName',
    contactPhone: 'contactPhone',
    contactEmail: 'contactEmail',
    creditLimit: 'creditLimit',
    openBalance: 'openBalance',
    totalOverdue: 'totalOverdue',
    status: 'status',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BusinessEntityScalarFieldEnum = (typeof BusinessEntityScalarFieldEnum)[keyof typeof BusinessEntityScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    name: 'name',
    sku: 'sku',
    barcode: 'barcode',
    description: 'description',
    costPrice: 'costPrice',
    unitOfMeasurement: 'unitOfMeasurement',
    quantity: 'quantity',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    businessEntityId: 'businessEntityId',
    documentCode: 'documentCode',
    documentType: 'documentType',
    documentStatus: 'documentStatus',
    paymentStatus: 'paymentStatus',
    date: 'date',
    dueDate: 'dueDate',
    vatAmount: 'vatAmount',
    vatRate: 'vatRate',
    amountBeforeVat: 'amountBeforeVat',
    amountAfterVat: 'amountAfterVat',
    taxWithheldAmount: 'taxWithheldAmount',
    withHoldingTaxRate: 'withHoldingTaxRate',
    withHoldingTaxAmount: 'withHoldingTaxAmount',
    note: 'note',
    memorandum: 'memorandum',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const DocumentProductScalarFieldEnum: {
    id: 'id',
    documentId: 'documentId',
    productId: 'productId',
    name: 'name',
    sku: 'sku',
    barcode: 'barcode',
    description: 'description',
    sellingPrice: 'sellingPrice',
    unitOfMeasurement: 'unitOfMeasurement',
    quantity: 'quantity'
  };

  export type DocumentProductScalarFieldEnum = (typeof DocumentProductScalarFieldEnum)[keyof typeof DocumentProductScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Roles'
   */
  export type EnumRolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Roles'>
    


  /**
   * Reference to a field of type 'Roles[]'
   */
  export type ListEnumRolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Roles[]'>
    


  /**
   * Reference to a field of type 'EntityType'
   */
  export type EnumEntityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EntityType'>
    


  /**
   * Reference to a field of type 'EntityType[]'
   */
  export type ListEnumEntityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EntityType[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'EntityStatus'
   */
  export type EnumEntityStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EntityStatus'>
    


  /**
   * Reference to a field of type 'EntityStatus[]'
   */
  export type ListEnumEntityStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EntityStatus[]'>
    


  /**
   * Reference to a field of type 'Measurements'
   */
  export type EnumMeasurementsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Measurements'>
    


  /**
   * Reference to a field of type 'Measurements[]'
   */
  export type ListEnumMeasurementsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Measurements[]'>
    


  /**
   * Reference to a field of type 'DocumentTypes'
   */
  export type EnumDocumentTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentTypes'>
    


  /**
   * Reference to a field of type 'DocumentTypes[]'
   */
  export type ListEnumDocumentTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentTypes[]'>
    


  /**
   * Reference to a field of type 'DocumentStatus'
   */
  export type EnumDocumentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentStatus'>
    


  /**
   * Reference to a field of type 'DocumentStatus[]'
   */
  export type ListEnumDocumentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: IntFilter<"Organization"> | number
    name?: StringFilter<"Organization"> | string
    street1?: StringNullableFilter<"Organization"> | string | null
    street2?: StringNullableFilter<"Organization"> | string | null
    city?: StringNullableFilter<"Organization"> | string | null
    state?: StringNullableFilter<"Organization"> | string | null
    country?: StringNullableFilter<"Organization"> | string | null
    zip?: StringNullableFilter<"Organization"> | string | null
    phone?: StringFilter<"Organization"> | string
    email?: StringFilter<"Organization"> | string
    image?: StringFilter<"Organization"> | string
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    users?: UserListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    street1?: SortOrderInput | SortOrder
    street2?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    zip?: SortOrderInput | SortOrder
    phone?: SortOrder
    email?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    phone?: string
    email?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    name?: StringFilter<"Organization"> | string
    street1?: StringNullableFilter<"Organization"> | string | null
    street2?: StringNullableFilter<"Organization"> | string | null
    city?: StringNullableFilter<"Organization"> | string | null
    state?: StringNullableFilter<"Organization"> | string | null
    country?: StringNullableFilter<"Organization"> | string | null
    zip?: StringNullableFilter<"Organization"> | string | null
    image?: StringFilter<"Organization"> | string
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    users?: UserListRelationFilter
  }, "id" | "phone" | "email">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    street1?: SortOrderInput | SortOrder
    street2?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    zip?: SortOrderInput | SortOrder
    phone?: SortOrder
    email?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _avg?: OrganizationAvgOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
    _sum?: OrganizationSumOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Organization"> | number
    name?: StringWithAggregatesFilter<"Organization"> | string
    street1?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    street2?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    city?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    state?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    country?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    zip?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    phone?: StringWithAggregatesFilter<"Organization"> | string
    email?: StringWithAggregatesFilter<"Organization"> | string
    image?: StringWithAggregatesFilter<"Organization"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    orgId?: IntNullableFilter<"User"> | number | null
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstname?: StringFilter<"User"> | string
    middlename?: StringNullableFilter<"User"> | string | null
    lastname?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumRolesFilter<"User"> | $Enums.Roles
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    products?: ProductListRelationFilter
    documents?: DocumentListRelationFilter
    businessEntities?: BusinessEntityListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrderInput | SortOrder
    username?: SortOrder
    password?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrderInput | SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    products?: ProductOrderByRelationAggregateInput
    documents?: DocumentOrderByRelationAggregateInput
    businessEntities?: BusinessEntityOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    orgId?: IntNullableFilter<"User"> | number | null
    password?: StringFilter<"User"> | string
    firstname?: StringFilter<"User"> | string
    middlename?: StringNullableFilter<"User"> | string | null
    lastname?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumRolesFilter<"User"> | $Enums.Roles
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    products?: ProductListRelationFilter
    documents?: DocumentListRelationFilter
    businessEntities?: BusinessEntityListRelationFilter
  }, "id" | "username" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrderInput | SortOrder
    username?: SortOrder
    password?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrderInput | SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    orgId?: IntNullableWithAggregatesFilter<"User"> | number | null
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstname?: StringWithAggregatesFilter<"User"> | string
    middlename?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastname?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRolesWithAggregatesFilter<"User"> | $Enums.Roles
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BusinessEntityWhereInput = {
    AND?: BusinessEntityWhereInput | BusinessEntityWhereInput[]
    OR?: BusinessEntityWhereInput[]
    NOT?: BusinessEntityWhereInput | BusinessEntityWhereInput[]
    id?: IntFilter<"BusinessEntity"> | number
    type?: EnumEntityTypeFilter<"BusinessEntity"> | $Enums.EntityType
    ownerId?: IntFilter<"BusinessEntity"> | number
    name?: StringFilter<"BusinessEntity"> | string
    trn?: StringFilter<"BusinessEntity"> | string
    description?: StringNullableFilter<"BusinessEntity"> | string | null
    note?: StringNullableFilter<"BusinessEntity"> | string | null
    defaultMarkup?: DecimalNullableFilter<"BusinessEntity"> | Decimal | DecimalJsLike | number | string | null
    standardMarkup?: DecimalNullableFilter<"BusinessEntity"> | Decimal | DecimalJsLike | number | string | null
    website?: StringNullableFilter<"BusinessEntity"> | string | null
    street1?: StringNullableFilter<"BusinessEntity"> | string | null
    street2?: StringNullableFilter<"BusinessEntity"> | string | null
    city?: StringNullableFilter<"BusinessEntity"> | string | null
    state?: StringNullableFilter<"BusinessEntity"> | string | null
    country?: StringNullableFilter<"BusinessEntity"> | string | null
    zip?: StringNullableFilter<"BusinessEntity"> | string | null
    contactTitle?: StringNullableFilter<"BusinessEntity"> | string | null
    contactFirstName?: StringNullableFilter<"BusinessEntity"> | string | null
    contactMiddleName?: StringNullableFilter<"BusinessEntity"> | string | null
    contactLastName?: StringNullableFilter<"BusinessEntity"> | string | null
    contactPhone?: StringNullableFilter<"BusinessEntity"> | string | null
    contactEmail?: StringNullableFilter<"BusinessEntity"> | string | null
    creditLimit?: DecimalFilter<"BusinessEntity"> | Decimal | DecimalJsLike | number | string
    openBalance?: DecimalFilter<"BusinessEntity"> | Decimal | DecimalJsLike | number | string
    totalOverdue?: DecimalFilter<"BusinessEntity"> | Decimal | DecimalJsLike | number | string
    status?: EnumEntityStatusFilter<"BusinessEntity"> | $Enums.EntityStatus
    image?: StringFilter<"BusinessEntity"> | string
    createdAt?: DateTimeFilter<"BusinessEntity"> | Date | string
    updatedAt?: DateTimeFilter<"BusinessEntity"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    documents?: DocumentListRelationFilter
  }

  export type BusinessEntityOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    trn?: SortOrder
    description?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    defaultMarkup?: SortOrderInput | SortOrder
    standardMarkup?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    street1?: SortOrderInput | SortOrder
    street2?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    zip?: SortOrderInput | SortOrder
    contactTitle?: SortOrderInput | SortOrder
    contactFirstName?: SortOrderInput | SortOrder
    contactMiddleName?: SortOrderInput | SortOrder
    contactLastName?: SortOrderInput | SortOrder
    contactPhone?: SortOrderInput | SortOrder
    contactEmail?: SortOrderInput | SortOrder
    creditLimit?: SortOrder
    openBalance?: SortOrder
    totalOverdue?: SortOrder
    status?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    documents?: DocumentOrderByRelationAggregateInput
  }

  export type BusinessEntityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    trn?: string
    AND?: BusinessEntityWhereInput | BusinessEntityWhereInput[]
    OR?: BusinessEntityWhereInput[]
    NOT?: BusinessEntityWhereInput | BusinessEntityWhereInput[]
    type?: EnumEntityTypeFilter<"BusinessEntity"> | $Enums.EntityType
    ownerId?: IntFilter<"BusinessEntity"> | number
    name?: StringFilter<"BusinessEntity"> | string
    description?: StringNullableFilter<"BusinessEntity"> | string | null
    note?: StringNullableFilter<"BusinessEntity"> | string | null
    defaultMarkup?: DecimalNullableFilter<"BusinessEntity"> | Decimal | DecimalJsLike | number | string | null
    standardMarkup?: DecimalNullableFilter<"BusinessEntity"> | Decimal | DecimalJsLike | number | string | null
    website?: StringNullableFilter<"BusinessEntity"> | string | null
    street1?: StringNullableFilter<"BusinessEntity"> | string | null
    street2?: StringNullableFilter<"BusinessEntity"> | string | null
    city?: StringNullableFilter<"BusinessEntity"> | string | null
    state?: StringNullableFilter<"BusinessEntity"> | string | null
    country?: StringNullableFilter<"BusinessEntity"> | string | null
    zip?: StringNullableFilter<"BusinessEntity"> | string | null
    contactTitle?: StringNullableFilter<"BusinessEntity"> | string | null
    contactFirstName?: StringNullableFilter<"BusinessEntity"> | string | null
    contactMiddleName?: StringNullableFilter<"BusinessEntity"> | string | null
    contactLastName?: StringNullableFilter<"BusinessEntity"> | string | null
    contactPhone?: StringNullableFilter<"BusinessEntity"> | string | null
    contactEmail?: StringNullableFilter<"BusinessEntity"> | string | null
    creditLimit?: DecimalFilter<"BusinessEntity"> | Decimal | DecimalJsLike | number | string
    openBalance?: DecimalFilter<"BusinessEntity"> | Decimal | DecimalJsLike | number | string
    totalOverdue?: DecimalFilter<"BusinessEntity"> | Decimal | DecimalJsLike | number | string
    status?: EnumEntityStatusFilter<"BusinessEntity"> | $Enums.EntityStatus
    image?: StringFilter<"BusinessEntity"> | string
    createdAt?: DateTimeFilter<"BusinessEntity"> | Date | string
    updatedAt?: DateTimeFilter<"BusinessEntity"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    documents?: DocumentListRelationFilter
  }, "id" | "trn">

  export type BusinessEntityOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    trn?: SortOrder
    description?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    defaultMarkup?: SortOrderInput | SortOrder
    standardMarkup?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    street1?: SortOrderInput | SortOrder
    street2?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    zip?: SortOrderInput | SortOrder
    contactTitle?: SortOrderInput | SortOrder
    contactFirstName?: SortOrderInput | SortOrder
    contactMiddleName?: SortOrderInput | SortOrder
    contactLastName?: SortOrderInput | SortOrder
    contactPhone?: SortOrderInput | SortOrder
    contactEmail?: SortOrderInput | SortOrder
    creditLimit?: SortOrder
    openBalance?: SortOrder
    totalOverdue?: SortOrder
    status?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BusinessEntityCountOrderByAggregateInput
    _avg?: BusinessEntityAvgOrderByAggregateInput
    _max?: BusinessEntityMaxOrderByAggregateInput
    _min?: BusinessEntityMinOrderByAggregateInput
    _sum?: BusinessEntitySumOrderByAggregateInput
  }

  export type BusinessEntityScalarWhereWithAggregatesInput = {
    AND?: BusinessEntityScalarWhereWithAggregatesInput | BusinessEntityScalarWhereWithAggregatesInput[]
    OR?: BusinessEntityScalarWhereWithAggregatesInput[]
    NOT?: BusinessEntityScalarWhereWithAggregatesInput | BusinessEntityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BusinessEntity"> | number
    type?: EnumEntityTypeWithAggregatesFilter<"BusinessEntity"> | $Enums.EntityType
    ownerId?: IntWithAggregatesFilter<"BusinessEntity"> | number
    name?: StringWithAggregatesFilter<"BusinessEntity"> | string
    trn?: StringWithAggregatesFilter<"BusinessEntity"> | string
    description?: StringNullableWithAggregatesFilter<"BusinessEntity"> | string | null
    note?: StringNullableWithAggregatesFilter<"BusinessEntity"> | string | null
    defaultMarkup?: DecimalNullableWithAggregatesFilter<"BusinessEntity"> | Decimal | DecimalJsLike | number | string | null
    standardMarkup?: DecimalNullableWithAggregatesFilter<"BusinessEntity"> | Decimal | DecimalJsLike | number | string | null
    website?: StringNullableWithAggregatesFilter<"BusinessEntity"> | string | null
    street1?: StringNullableWithAggregatesFilter<"BusinessEntity"> | string | null
    street2?: StringNullableWithAggregatesFilter<"BusinessEntity"> | string | null
    city?: StringNullableWithAggregatesFilter<"BusinessEntity"> | string | null
    state?: StringNullableWithAggregatesFilter<"BusinessEntity"> | string | null
    country?: StringNullableWithAggregatesFilter<"BusinessEntity"> | string | null
    zip?: StringNullableWithAggregatesFilter<"BusinessEntity"> | string | null
    contactTitle?: StringNullableWithAggregatesFilter<"BusinessEntity"> | string | null
    contactFirstName?: StringNullableWithAggregatesFilter<"BusinessEntity"> | string | null
    contactMiddleName?: StringNullableWithAggregatesFilter<"BusinessEntity"> | string | null
    contactLastName?: StringNullableWithAggregatesFilter<"BusinessEntity"> | string | null
    contactPhone?: StringNullableWithAggregatesFilter<"BusinessEntity"> | string | null
    contactEmail?: StringNullableWithAggregatesFilter<"BusinessEntity"> | string | null
    creditLimit?: DecimalWithAggregatesFilter<"BusinessEntity"> | Decimal | DecimalJsLike | number | string
    openBalance?: DecimalWithAggregatesFilter<"BusinessEntity"> | Decimal | DecimalJsLike | number | string
    totalOverdue?: DecimalWithAggregatesFilter<"BusinessEntity"> | Decimal | DecimalJsLike | number | string
    status?: EnumEntityStatusWithAggregatesFilter<"BusinessEntity"> | $Enums.EntityStatus
    image?: StringWithAggregatesFilter<"BusinessEntity"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BusinessEntity"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BusinessEntity"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    ownerId?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    sku?: StringFilter<"Product"> | string
    barcode?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    costPrice?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    unitOfMeasurement?: EnumMeasurementsFilter<"Product"> | $Enums.Measurements
    quantity?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    image?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    documents?: DocumentProductListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    barcode?: SortOrder
    description?: SortOrderInput | SortOrder
    costPrice?: SortOrder
    unitOfMeasurement?: SortOrder
    quantity?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    documents?: DocumentProductOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    sku?: string
    barcode?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    ownerId?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    costPrice?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    unitOfMeasurement?: EnumMeasurementsFilter<"Product"> | $Enums.Measurements
    quantity?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    image?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    documents?: DocumentProductListRelationFilter
  }, "id" | "sku" | "barcode">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    barcode?: SortOrder
    description?: SortOrderInput | SortOrder
    costPrice?: SortOrder
    unitOfMeasurement?: SortOrder
    quantity?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    ownerId?: IntWithAggregatesFilter<"Product"> | number
    name?: StringWithAggregatesFilter<"Product"> | string
    sku?: StringWithAggregatesFilter<"Product"> | string
    barcode?: StringWithAggregatesFilter<"Product"> | string
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    costPrice?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    unitOfMeasurement?: EnumMeasurementsWithAggregatesFilter<"Product"> | $Enums.Measurements
    quantity?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    image?: StringNullableWithAggregatesFilter<"Product"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: IntFilter<"Document"> | number
    ownerId?: IntFilter<"Document"> | number
    businessEntityId?: IntFilter<"Document"> | number
    documentCode?: StringFilter<"Document"> | string
    documentType?: EnumDocumentTypesFilter<"Document"> | $Enums.DocumentTypes
    documentStatus?: EnumDocumentStatusFilter<"Document"> | $Enums.DocumentStatus
    paymentStatus?: EnumPaymentStatusFilter<"Document"> | $Enums.PaymentStatus
    date?: DateTimeFilter<"Document"> | Date | string
    dueDate?: DateTimeFilter<"Document"> | Date | string
    vatAmount?: DecimalFilter<"Document"> | Decimal | DecimalJsLike | number | string
    vatRate?: DecimalFilter<"Document"> | Decimal | DecimalJsLike | number | string
    amountBeforeVat?: DecimalFilter<"Document"> | Decimal | DecimalJsLike | number | string
    amountAfterVat?: DecimalFilter<"Document"> | Decimal | DecimalJsLike | number | string
    taxWithheldAmount?: DecimalNullableFilter<"Document"> | Decimal | DecimalJsLike | number | string | null
    withHoldingTaxRate?: DecimalNullableFilter<"Document"> | Decimal | DecimalJsLike | number | string | null
    withHoldingTaxAmount?: DecimalNullableFilter<"Document"> | Decimal | DecimalJsLike | number | string | null
    note?: StringNullableFilter<"Document"> | string | null
    memorandum?: StringNullableFilter<"Document"> | string | null
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    businessEntity?: XOR<BusinessEntityScalarRelationFilter, BusinessEntityWhereInput>
    products?: DocumentProductListRelationFilter
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    businessEntityId?: SortOrder
    documentCode?: SortOrder
    documentType?: SortOrder
    documentStatus?: SortOrder
    paymentStatus?: SortOrder
    date?: SortOrder
    dueDate?: SortOrder
    vatAmount?: SortOrder
    vatRate?: SortOrder
    amountBeforeVat?: SortOrder
    amountAfterVat?: SortOrder
    taxWithheldAmount?: SortOrderInput | SortOrder
    withHoldingTaxRate?: SortOrderInput | SortOrder
    withHoldingTaxAmount?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    memorandum?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    businessEntity?: BusinessEntityOrderByWithRelationInput
    products?: DocumentProductOrderByRelationAggregateInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    documentCode?: string
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    ownerId?: IntFilter<"Document"> | number
    businessEntityId?: IntFilter<"Document"> | number
    documentType?: EnumDocumentTypesFilter<"Document"> | $Enums.DocumentTypes
    documentStatus?: EnumDocumentStatusFilter<"Document"> | $Enums.DocumentStatus
    paymentStatus?: EnumPaymentStatusFilter<"Document"> | $Enums.PaymentStatus
    date?: DateTimeFilter<"Document"> | Date | string
    dueDate?: DateTimeFilter<"Document"> | Date | string
    vatAmount?: DecimalFilter<"Document"> | Decimal | DecimalJsLike | number | string
    vatRate?: DecimalFilter<"Document"> | Decimal | DecimalJsLike | number | string
    amountBeforeVat?: DecimalFilter<"Document"> | Decimal | DecimalJsLike | number | string
    amountAfterVat?: DecimalFilter<"Document"> | Decimal | DecimalJsLike | number | string
    taxWithheldAmount?: DecimalNullableFilter<"Document"> | Decimal | DecimalJsLike | number | string | null
    withHoldingTaxRate?: DecimalNullableFilter<"Document"> | Decimal | DecimalJsLike | number | string | null
    withHoldingTaxAmount?: DecimalNullableFilter<"Document"> | Decimal | DecimalJsLike | number | string | null
    note?: StringNullableFilter<"Document"> | string | null
    memorandum?: StringNullableFilter<"Document"> | string | null
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    businessEntity?: XOR<BusinessEntityScalarRelationFilter, BusinessEntityWhereInput>
    products?: DocumentProductListRelationFilter
  }, "id" | "documentCode">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    businessEntityId?: SortOrder
    documentCode?: SortOrder
    documentType?: SortOrder
    documentStatus?: SortOrder
    paymentStatus?: SortOrder
    date?: SortOrder
    dueDate?: SortOrder
    vatAmount?: SortOrder
    vatRate?: SortOrder
    amountBeforeVat?: SortOrder
    amountAfterVat?: SortOrder
    taxWithheldAmount?: SortOrderInput | SortOrder
    withHoldingTaxRate?: SortOrderInput | SortOrder
    withHoldingTaxAmount?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    memorandum?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _avg?: DocumentAvgOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
    _sum?: DocumentSumOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Document"> | number
    ownerId?: IntWithAggregatesFilter<"Document"> | number
    businessEntityId?: IntWithAggregatesFilter<"Document"> | number
    documentCode?: StringWithAggregatesFilter<"Document"> | string
    documentType?: EnumDocumentTypesWithAggregatesFilter<"Document"> | $Enums.DocumentTypes
    documentStatus?: EnumDocumentStatusWithAggregatesFilter<"Document"> | $Enums.DocumentStatus
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"Document"> | $Enums.PaymentStatus
    date?: DateTimeWithAggregatesFilter<"Document"> | Date | string
    dueDate?: DateTimeWithAggregatesFilter<"Document"> | Date | string
    vatAmount?: DecimalWithAggregatesFilter<"Document"> | Decimal | DecimalJsLike | number | string
    vatRate?: DecimalWithAggregatesFilter<"Document"> | Decimal | DecimalJsLike | number | string
    amountBeforeVat?: DecimalWithAggregatesFilter<"Document"> | Decimal | DecimalJsLike | number | string
    amountAfterVat?: DecimalWithAggregatesFilter<"Document"> | Decimal | DecimalJsLike | number | string
    taxWithheldAmount?: DecimalNullableWithAggregatesFilter<"Document"> | Decimal | DecimalJsLike | number | string | null
    withHoldingTaxRate?: DecimalNullableWithAggregatesFilter<"Document"> | Decimal | DecimalJsLike | number | string | null
    withHoldingTaxAmount?: DecimalNullableWithAggregatesFilter<"Document"> | Decimal | DecimalJsLike | number | string | null
    note?: StringNullableWithAggregatesFilter<"Document"> | string | null
    memorandum?: StringNullableWithAggregatesFilter<"Document"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
  }

  export type DocumentProductWhereInput = {
    AND?: DocumentProductWhereInput | DocumentProductWhereInput[]
    OR?: DocumentProductWhereInput[]
    NOT?: DocumentProductWhereInput | DocumentProductWhereInput[]
    id?: IntFilter<"DocumentProduct"> | number
    documentId?: IntFilter<"DocumentProduct"> | number
    productId?: IntFilter<"DocumentProduct"> | number
    name?: StringFilter<"DocumentProduct"> | string
    sku?: StringFilter<"DocumentProduct"> | string
    barcode?: StringFilter<"DocumentProduct"> | string
    description?: StringNullableFilter<"DocumentProduct"> | string | null
    sellingPrice?: DecimalFilter<"DocumentProduct"> | Decimal | DecimalJsLike | number | string
    unitOfMeasurement?: EnumMeasurementsFilter<"DocumentProduct"> | $Enums.Measurements
    quantity?: DecimalFilter<"DocumentProduct"> | Decimal | DecimalJsLike | number | string
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type DocumentProductOrderByWithRelationInput = {
    id?: SortOrder
    documentId?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    barcode?: SortOrder
    description?: SortOrderInput | SortOrder
    sellingPrice?: SortOrder
    unitOfMeasurement?: SortOrder
    quantity?: SortOrder
    document?: DocumentOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type DocumentProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DocumentProductWhereInput | DocumentProductWhereInput[]
    OR?: DocumentProductWhereInput[]
    NOT?: DocumentProductWhereInput | DocumentProductWhereInput[]
    documentId?: IntFilter<"DocumentProduct"> | number
    productId?: IntFilter<"DocumentProduct"> | number
    name?: StringFilter<"DocumentProduct"> | string
    sku?: StringFilter<"DocumentProduct"> | string
    barcode?: StringFilter<"DocumentProduct"> | string
    description?: StringNullableFilter<"DocumentProduct"> | string | null
    sellingPrice?: DecimalFilter<"DocumentProduct"> | Decimal | DecimalJsLike | number | string
    unitOfMeasurement?: EnumMeasurementsFilter<"DocumentProduct"> | $Enums.Measurements
    quantity?: DecimalFilter<"DocumentProduct"> | Decimal | DecimalJsLike | number | string
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type DocumentProductOrderByWithAggregationInput = {
    id?: SortOrder
    documentId?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    barcode?: SortOrder
    description?: SortOrderInput | SortOrder
    sellingPrice?: SortOrder
    unitOfMeasurement?: SortOrder
    quantity?: SortOrder
    _count?: DocumentProductCountOrderByAggregateInput
    _avg?: DocumentProductAvgOrderByAggregateInput
    _max?: DocumentProductMaxOrderByAggregateInput
    _min?: DocumentProductMinOrderByAggregateInput
    _sum?: DocumentProductSumOrderByAggregateInput
  }

  export type DocumentProductScalarWhereWithAggregatesInput = {
    AND?: DocumentProductScalarWhereWithAggregatesInput | DocumentProductScalarWhereWithAggregatesInput[]
    OR?: DocumentProductScalarWhereWithAggregatesInput[]
    NOT?: DocumentProductScalarWhereWithAggregatesInput | DocumentProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DocumentProduct"> | number
    documentId?: IntWithAggregatesFilter<"DocumentProduct"> | number
    productId?: IntWithAggregatesFilter<"DocumentProduct"> | number
    name?: StringWithAggregatesFilter<"DocumentProduct"> | string
    sku?: StringWithAggregatesFilter<"DocumentProduct"> | string
    barcode?: StringWithAggregatesFilter<"DocumentProduct"> | string
    description?: StringNullableWithAggregatesFilter<"DocumentProduct"> | string | null
    sellingPrice?: DecimalWithAggregatesFilter<"DocumentProduct"> | Decimal | DecimalJsLike | number | string
    unitOfMeasurement?: EnumMeasurementsWithAggregatesFilter<"DocumentProduct"> | $Enums.Measurements
    quantity?: DecimalWithAggregatesFilter<"DocumentProduct"> | Decimal | DecimalJsLike | number | string
  }

  export type OrganizationCreateInput = {
    name: string
    street1?: string | null
    street2?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    zip?: string | null
    phone: string
    email: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: number
    name: string
    street1?: string | null
    street2?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    zip?: string | null
    phone: string
    email: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    street1?: NullableStringFieldUpdateOperationsInput | string | null
    street2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    street1?: NullableStringFieldUpdateOperationsInput | string | null
    street2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: number
    name: string
    street1?: string | null
    street2?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    zip?: string | null
    phone: string
    email: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    street1?: NullableStringFieldUpdateOperationsInput | string | null
    street2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    street1?: NullableStringFieldUpdateOperationsInput | string | null
    street2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    username: string
    password: string
    firstname: string
    middlename?: string | null
    lastname: string
    email: string
    phone?: string | null
    image?: string | null
    role: $Enums.Roles
    createdAt?: Date | string
    updatedAt?: Date | string
    organization?: OrganizationCreateNestedOneWithoutUsersInput
    products?: ProductCreateNestedManyWithoutOwnerInput
    documents?: DocumentCreateNestedManyWithoutOwnerInput
    businessEntities?: BusinessEntityCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    orgId?: number | null
    username: string
    password: string
    firstname: string
    middlename?: string | null
    lastname: string
    email: string
    phone?: string | null
    image?: string | null
    role: $Enums.Roles
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutOwnerInput
    documents?: DocumentUncheckedCreateNestedManyWithoutOwnerInput
    businessEntities?: BusinessEntityUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneWithoutUsersNestedInput
    products?: ProductUpdateManyWithoutOwnerNestedInput
    documents?: DocumentUpdateManyWithoutOwnerNestedInput
    businessEntities?: BusinessEntityUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orgId?: NullableIntFieldUpdateOperationsInput | number | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutOwnerNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutOwnerNestedInput
    businessEntities?: BusinessEntityUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    orgId?: number | null
    username: string
    password: string
    firstname: string
    middlename?: string | null
    lastname: string
    email: string
    phone?: string | null
    image?: string | null
    role: $Enums.Roles
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orgId?: NullableIntFieldUpdateOperationsInput | number | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessEntityCreateInput = {
    type: $Enums.EntityType
    name: string
    trn: string
    description?: string | null
    note?: string | null
    defaultMarkup?: Decimal | DecimalJsLike | number | string | null
    standardMarkup?: Decimal | DecimalJsLike | number | string | null
    website?: string | null
    street1?: string | null
    street2?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    zip?: string | null
    contactTitle?: string | null
    contactFirstName?: string | null
    contactMiddleName?: string | null
    contactLastName?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    creditLimit: Decimal | DecimalJsLike | number | string
    openBalance: Decimal | DecimalJsLike | number | string
    totalOverdue: Decimal | DecimalJsLike | number | string
    status?: $Enums.EntityStatus
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutBusinessEntitiesInput
    documents?: DocumentCreateNestedManyWithoutBusinessEntityInput
  }

  export type BusinessEntityUncheckedCreateInput = {
    id?: number
    type: $Enums.EntityType
    ownerId: number
    name: string
    trn: string
    description?: string | null
    note?: string | null
    defaultMarkup?: Decimal | DecimalJsLike | number | string | null
    standardMarkup?: Decimal | DecimalJsLike | number | string | null
    website?: string | null
    street1?: string | null
    street2?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    zip?: string | null
    contactTitle?: string | null
    contactFirstName?: string | null
    contactMiddleName?: string | null
    contactLastName?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    creditLimit: Decimal | DecimalJsLike | number | string
    openBalance: Decimal | DecimalJsLike | number | string
    totalOverdue: Decimal | DecimalJsLike | number | string
    status?: $Enums.EntityStatus
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutBusinessEntityInput
  }

  export type BusinessEntityUpdateInput = {
    type?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    name?: StringFieldUpdateOperationsInput | string
    trn?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    defaultMarkup?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    standardMarkup?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    street1?: NullableStringFieldUpdateOperationsInput | string | null
    street2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    contactTitle?: NullableStringFieldUpdateOperationsInput | string | null
    contactFirstName?: NullableStringFieldUpdateOperationsInput | string | null
    contactMiddleName?: NullableStringFieldUpdateOperationsInput | string | null
    contactLastName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    creditLimit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    openBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalOverdue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumEntityStatusFieldUpdateOperationsInput | $Enums.EntityStatus
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutBusinessEntitiesNestedInput
    documents?: DocumentUpdateManyWithoutBusinessEntityNestedInput
  }

  export type BusinessEntityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    ownerId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    trn?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    defaultMarkup?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    standardMarkup?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    street1?: NullableStringFieldUpdateOperationsInput | string | null
    street2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    contactTitle?: NullableStringFieldUpdateOperationsInput | string | null
    contactFirstName?: NullableStringFieldUpdateOperationsInput | string | null
    contactMiddleName?: NullableStringFieldUpdateOperationsInput | string | null
    contactLastName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    creditLimit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    openBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalOverdue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumEntityStatusFieldUpdateOperationsInput | $Enums.EntityStatus
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutBusinessEntityNestedInput
  }

  export type BusinessEntityCreateManyInput = {
    id?: number
    type: $Enums.EntityType
    ownerId: number
    name: string
    trn: string
    description?: string | null
    note?: string | null
    defaultMarkup?: Decimal | DecimalJsLike | number | string | null
    standardMarkup?: Decimal | DecimalJsLike | number | string | null
    website?: string | null
    street1?: string | null
    street2?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    zip?: string | null
    contactTitle?: string | null
    contactFirstName?: string | null
    contactMiddleName?: string | null
    contactLastName?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    creditLimit: Decimal | DecimalJsLike | number | string
    openBalance: Decimal | DecimalJsLike | number | string
    totalOverdue: Decimal | DecimalJsLike | number | string
    status?: $Enums.EntityStatus
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessEntityUpdateManyMutationInput = {
    type?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    name?: StringFieldUpdateOperationsInput | string
    trn?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    defaultMarkup?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    standardMarkup?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    street1?: NullableStringFieldUpdateOperationsInput | string | null
    street2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    contactTitle?: NullableStringFieldUpdateOperationsInput | string | null
    contactFirstName?: NullableStringFieldUpdateOperationsInput | string | null
    contactMiddleName?: NullableStringFieldUpdateOperationsInput | string | null
    contactLastName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    creditLimit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    openBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalOverdue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumEntityStatusFieldUpdateOperationsInput | $Enums.EntityStatus
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessEntityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    ownerId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    trn?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    defaultMarkup?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    standardMarkup?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    street1?: NullableStringFieldUpdateOperationsInput | string | null
    street2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    contactTitle?: NullableStringFieldUpdateOperationsInput | string | null
    contactFirstName?: NullableStringFieldUpdateOperationsInput | string | null
    contactMiddleName?: NullableStringFieldUpdateOperationsInput | string | null
    contactLastName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    creditLimit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    openBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalOverdue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumEntityStatusFieldUpdateOperationsInput | $Enums.EntityStatus
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    name: string
    sku: string
    barcode: string
    description?: string | null
    costPrice: Decimal | DecimalJsLike | number | string
    unitOfMeasurement: $Enums.Measurements
    quantity: Decimal | DecimalJsLike | number | string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutProductsInput
    documents?: DocumentProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    ownerId: number
    name: string
    sku: string
    barcode: string
    description?: string | null
    costPrice: Decimal | DecimalJsLike | number | string
    unitOfMeasurement: $Enums.Measurements
    quantity: Decimal | DecimalJsLike | number | string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    costPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitOfMeasurement?: EnumMeasurementsFieldUpdateOperationsInput | $Enums.Measurements
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutProductsNestedInput
    documents?: DocumentProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    costPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitOfMeasurement?: EnumMeasurementsFieldUpdateOperationsInput | $Enums.Measurements
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    ownerId: number
    name: string
    sku: string
    barcode: string
    description?: string | null
    costPrice: Decimal | DecimalJsLike | number | string
    unitOfMeasurement: $Enums.Measurements
    quantity: Decimal | DecimalJsLike | number | string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    costPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitOfMeasurement?: EnumMeasurementsFieldUpdateOperationsInput | $Enums.Measurements
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    costPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitOfMeasurement?: EnumMeasurementsFieldUpdateOperationsInput | $Enums.Measurements
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateInput = {
    documentCode: string
    documentType: $Enums.DocumentTypes
    documentStatus: $Enums.DocumentStatus
    paymentStatus: $Enums.PaymentStatus
    date?: Date | string
    dueDate: Date | string
    vatAmount: Decimal | DecimalJsLike | number | string
    vatRate: Decimal | DecimalJsLike | number | string
    amountBeforeVat: Decimal | DecimalJsLike | number | string
    amountAfterVat: Decimal | DecimalJsLike | number | string
    taxWithheldAmount?: Decimal | DecimalJsLike | number | string | null
    withHoldingTaxRate?: Decimal | DecimalJsLike | number | string | null
    withHoldingTaxAmount?: Decimal | DecimalJsLike | number | string | null
    note?: string | null
    memorandum?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutDocumentsInput
    businessEntity: BusinessEntityCreateNestedOneWithoutDocumentsInput
    products?: DocumentProductCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: number
    ownerId: number
    businessEntityId: number
    documentCode: string
    documentType: $Enums.DocumentTypes
    documentStatus: $Enums.DocumentStatus
    paymentStatus: $Enums.PaymentStatus
    date?: Date | string
    dueDate: Date | string
    vatAmount: Decimal | DecimalJsLike | number | string
    vatRate: Decimal | DecimalJsLike | number | string
    amountBeforeVat: Decimal | DecimalJsLike | number | string
    amountAfterVat: Decimal | DecimalJsLike | number | string
    taxWithheldAmount?: Decimal | DecimalJsLike | number | string | null
    withHoldingTaxRate?: Decimal | DecimalJsLike | number | string | null
    withHoldingTaxAmount?: Decimal | DecimalJsLike | number | string | null
    note?: string | null
    memorandum?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: DocumentProductUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUpdateInput = {
    documentCode?: StringFieldUpdateOperationsInput | string
    documentType?: EnumDocumentTypesFieldUpdateOperationsInput | $Enums.DocumentTypes
    documentStatus?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    vatAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    vatRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountBeforeVat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountAfterVat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxWithheldAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    withHoldingTaxRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    withHoldingTaxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    memorandum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutDocumentsNestedInput
    businessEntity?: BusinessEntityUpdateOneRequiredWithoutDocumentsNestedInput
    products?: DocumentProductUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    businessEntityId?: IntFieldUpdateOperationsInput | number
    documentCode?: StringFieldUpdateOperationsInput | string
    documentType?: EnumDocumentTypesFieldUpdateOperationsInput | $Enums.DocumentTypes
    documentStatus?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    vatAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    vatRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountBeforeVat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountAfterVat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxWithheldAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    withHoldingTaxRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    withHoldingTaxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    memorandum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: DocumentProductUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentCreateManyInput = {
    id?: number
    ownerId: number
    businessEntityId: number
    documentCode: string
    documentType: $Enums.DocumentTypes
    documentStatus: $Enums.DocumentStatus
    paymentStatus: $Enums.PaymentStatus
    date?: Date | string
    dueDate: Date | string
    vatAmount: Decimal | DecimalJsLike | number | string
    vatRate: Decimal | DecimalJsLike | number | string
    amountBeforeVat: Decimal | DecimalJsLike | number | string
    amountAfterVat: Decimal | DecimalJsLike | number | string
    taxWithheldAmount?: Decimal | DecimalJsLike | number | string | null
    withHoldingTaxRate?: Decimal | DecimalJsLike | number | string | null
    withHoldingTaxAmount?: Decimal | DecimalJsLike | number | string | null
    note?: string | null
    memorandum?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUpdateManyMutationInput = {
    documentCode?: StringFieldUpdateOperationsInput | string
    documentType?: EnumDocumentTypesFieldUpdateOperationsInput | $Enums.DocumentTypes
    documentStatus?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    vatAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    vatRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountBeforeVat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountAfterVat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxWithheldAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    withHoldingTaxRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    withHoldingTaxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    memorandum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    businessEntityId?: IntFieldUpdateOperationsInput | number
    documentCode?: StringFieldUpdateOperationsInput | string
    documentType?: EnumDocumentTypesFieldUpdateOperationsInput | $Enums.DocumentTypes
    documentStatus?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    vatAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    vatRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountBeforeVat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountAfterVat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxWithheldAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    withHoldingTaxRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    withHoldingTaxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    memorandum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentProductCreateInput = {
    name: string
    sku: string
    barcode: string
    description?: string | null
    sellingPrice: Decimal | DecimalJsLike | number | string
    unitOfMeasurement: $Enums.Measurements
    quantity: Decimal | DecimalJsLike | number | string
    document: DocumentCreateNestedOneWithoutProductsInput
    product: ProductCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentProductUncheckedCreateInput = {
    id?: number
    documentId: number
    productId: number
    name: string
    sku: string
    barcode: string
    description?: string | null
    sellingPrice: Decimal | DecimalJsLike | number | string
    unitOfMeasurement: $Enums.Measurements
    quantity: Decimal | DecimalJsLike | number | string
  }

  export type DocumentProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sellingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitOfMeasurement?: EnumMeasurementsFieldUpdateOperationsInput | $Enums.Measurements
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    document?: DocumentUpdateOneRequiredWithoutProductsNestedInput
    product?: ProductUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DocumentProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sellingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitOfMeasurement?: EnumMeasurementsFieldUpdateOperationsInput | $Enums.Measurements
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DocumentProductCreateManyInput = {
    id?: number
    documentId: number
    productId: number
    name: string
    sku: string
    barcode: string
    description?: string | null
    sellingPrice: Decimal | DecimalJsLike | number | string
    unitOfMeasurement: $Enums.Measurements
    quantity: Decimal | DecimalJsLike | number | string
  }

  export type DocumentProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sellingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitOfMeasurement?: EnumMeasurementsFieldUpdateOperationsInput | $Enums.Measurements
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DocumentProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sellingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitOfMeasurement?: EnumMeasurementsFieldUpdateOperationsInput | $Enums.Measurements
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    street1?: SortOrder
    street2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    zip?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    street1?: SortOrder
    street2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    zip?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    street1?: SortOrder
    street2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    zip?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumRolesFilter<$PrismaModel> | $Enums.Roles
  }

  export type OrganizationNullableScalarRelationFilter = {
    is?: OrganizationWhereInput | null
    isNot?: OrganizationWhereInput | null
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type DocumentListRelationFilter = {
    every?: DocumentWhereInput
    some?: DocumentWhereInput
    none?: DocumentWhereInput
  }

  export type BusinessEntityListRelationFilter = {
    every?: BusinessEntityWhereInput
    some?: BusinessEntityWhereInput
    none?: BusinessEntityWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusinessEntityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    username?: SortOrder
    password?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    image?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    username?: SortOrder
    password?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    image?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    username?: SortOrder
    password?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    image?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumRolesWithAggregatesFilter<$PrismaModel> | $Enums.Roles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolesFilter<$PrismaModel>
    _max?: NestedEnumRolesFilter<$PrismaModel>
  }

  export type EnumEntityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EntityType | EnumEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEntityTypeFilter<$PrismaModel> | $Enums.EntityType
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumEntityStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EntityStatus | EnumEntityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EntityStatus[] | ListEnumEntityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EntityStatus[] | ListEnumEntityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEntityStatusFilter<$PrismaModel> | $Enums.EntityStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BusinessEntityCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    trn?: SortOrder
    description?: SortOrder
    note?: SortOrder
    defaultMarkup?: SortOrder
    standardMarkup?: SortOrder
    website?: SortOrder
    street1?: SortOrder
    street2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    zip?: SortOrder
    contactTitle?: SortOrder
    contactFirstName?: SortOrder
    contactMiddleName?: SortOrder
    contactLastName?: SortOrder
    contactPhone?: SortOrder
    contactEmail?: SortOrder
    creditLimit?: SortOrder
    openBalance?: SortOrder
    totalOverdue?: SortOrder
    status?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessEntityAvgOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    defaultMarkup?: SortOrder
    standardMarkup?: SortOrder
    creditLimit?: SortOrder
    openBalance?: SortOrder
    totalOverdue?: SortOrder
  }

  export type BusinessEntityMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    trn?: SortOrder
    description?: SortOrder
    note?: SortOrder
    defaultMarkup?: SortOrder
    standardMarkup?: SortOrder
    website?: SortOrder
    street1?: SortOrder
    street2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    zip?: SortOrder
    contactTitle?: SortOrder
    contactFirstName?: SortOrder
    contactMiddleName?: SortOrder
    contactLastName?: SortOrder
    contactPhone?: SortOrder
    contactEmail?: SortOrder
    creditLimit?: SortOrder
    openBalance?: SortOrder
    totalOverdue?: SortOrder
    status?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessEntityMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    trn?: SortOrder
    description?: SortOrder
    note?: SortOrder
    defaultMarkup?: SortOrder
    standardMarkup?: SortOrder
    website?: SortOrder
    street1?: SortOrder
    street2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    zip?: SortOrder
    contactTitle?: SortOrder
    contactFirstName?: SortOrder
    contactMiddleName?: SortOrder
    contactLastName?: SortOrder
    contactPhone?: SortOrder
    contactEmail?: SortOrder
    creditLimit?: SortOrder
    openBalance?: SortOrder
    totalOverdue?: SortOrder
    status?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessEntitySumOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    defaultMarkup?: SortOrder
    standardMarkup?: SortOrder
    creditLimit?: SortOrder
    openBalance?: SortOrder
    totalOverdue?: SortOrder
  }

  export type EnumEntityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EntityType | EnumEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEntityTypeWithAggregatesFilter<$PrismaModel> | $Enums.EntityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEntityTypeFilter<$PrismaModel>
    _max?: NestedEnumEntityTypeFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumEntityStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EntityStatus | EnumEntityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EntityStatus[] | ListEnumEntityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EntityStatus[] | ListEnumEntityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEntityStatusWithAggregatesFilter<$PrismaModel> | $Enums.EntityStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEntityStatusFilter<$PrismaModel>
    _max?: NestedEnumEntityStatusFilter<$PrismaModel>
  }

  export type EnumMeasurementsFilter<$PrismaModel = never> = {
    equals?: $Enums.Measurements | EnumMeasurementsFieldRefInput<$PrismaModel>
    in?: $Enums.Measurements[] | ListEnumMeasurementsFieldRefInput<$PrismaModel>
    notIn?: $Enums.Measurements[] | ListEnumMeasurementsFieldRefInput<$PrismaModel>
    not?: NestedEnumMeasurementsFilter<$PrismaModel> | $Enums.Measurements
  }

  export type DocumentProductListRelationFilter = {
    every?: DocumentProductWhereInput
    some?: DocumentProductWhereInput
    none?: DocumentProductWhereInput
  }

  export type DocumentProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    barcode?: SortOrder
    description?: SortOrder
    costPrice?: SortOrder
    unitOfMeasurement?: SortOrder
    quantity?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    costPrice?: SortOrder
    quantity?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    barcode?: SortOrder
    description?: SortOrder
    costPrice?: SortOrder
    unitOfMeasurement?: SortOrder
    quantity?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    barcode?: SortOrder
    description?: SortOrder
    costPrice?: SortOrder
    unitOfMeasurement?: SortOrder
    quantity?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    costPrice?: SortOrder
    quantity?: SortOrder
  }

  export type EnumMeasurementsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Measurements | EnumMeasurementsFieldRefInput<$PrismaModel>
    in?: $Enums.Measurements[] | ListEnumMeasurementsFieldRefInput<$PrismaModel>
    notIn?: $Enums.Measurements[] | ListEnumMeasurementsFieldRefInput<$PrismaModel>
    not?: NestedEnumMeasurementsWithAggregatesFilter<$PrismaModel> | $Enums.Measurements
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMeasurementsFilter<$PrismaModel>
    _max?: NestedEnumMeasurementsFilter<$PrismaModel>
  }

  export type EnumDocumentTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentTypes | EnumDocumentTypesFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentTypes[] | ListEnumDocumentTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentTypes[] | ListEnumDocumentTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypesFilter<$PrismaModel> | $Enums.DocumentTypes
  }

  export type EnumDocumentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | EnumDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentStatusFilter<$PrismaModel> | $Enums.DocumentStatus
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type BusinessEntityScalarRelationFilter = {
    is?: BusinessEntityWhereInput
    isNot?: BusinessEntityWhereInput
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    businessEntityId?: SortOrder
    documentCode?: SortOrder
    documentType?: SortOrder
    documentStatus?: SortOrder
    paymentStatus?: SortOrder
    date?: SortOrder
    dueDate?: SortOrder
    vatAmount?: SortOrder
    vatRate?: SortOrder
    amountBeforeVat?: SortOrder
    amountAfterVat?: SortOrder
    taxWithheldAmount?: SortOrder
    withHoldingTaxRate?: SortOrder
    withHoldingTaxAmount?: SortOrder
    note?: SortOrder
    memorandum?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentAvgOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    businessEntityId?: SortOrder
    vatAmount?: SortOrder
    vatRate?: SortOrder
    amountBeforeVat?: SortOrder
    amountAfterVat?: SortOrder
    taxWithheldAmount?: SortOrder
    withHoldingTaxRate?: SortOrder
    withHoldingTaxAmount?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    businessEntityId?: SortOrder
    documentCode?: SortOrder
    documentType?: SortOrder
    documentStatus?: SortOrder
    paymentStatus?: SortOrder
    date?: SortOrder
    dueDate?: SortOrder
    vatAmount?: SortOrder
    vatRate?: SortOrder
    amountBeforeVat?: SortOrder
    amountAfterVat?: SortOrder
    taxWithheldAmount?: SortOrder
    withHoldingTaxRate?: SortOrder
    withHoldingTaxAmount?: SortOrder
    note?: SortOrder
    memorandum?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    businessEntityId?: SortOrder
    documentCode?: SortOrder
    documentType?: SortOrder
    documentStatus?: SortOrder
    paymentStatus?: SortOrder
    date?: SortOrder
    dueDate?: SortOrder
    vatAmount?: SortOrder
    vatRate?: SortOrder
    amountBeforeVat?: SortOrder
    amountAfterVat?: SortOrder
    taxWithheldAmount?: SortOrder
    withHoldingTaxRate?: SortOrder
    withHoldingTaxAmount?: SortOrder
    note?: SortOrder
    memorandum?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentSumOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    businessEntityId?: SortOrder
    vatAmount?: SortOrder
    vatRate?: SortOrder
    amountBeforeVat?: SortOrder
    amountAfterVat?: SortOrder
    taxWithheldAmount?: SortOrder
    withHoldingTaxRate?: SortOrder
    withHoldingTaxAmount?: SortOrder
  }

  export type EnumDocumentTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentTypes | EnumDocumentTypesFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentTypes[] | ListEnumDocumentTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentTypes[] | ListEnumDocumentTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypesWithAggregatesFilter<$PrismaModel> | $Enums.DocumentTypes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentTypesFilter<$PrismaModel>
    _max?: NestedEnumDocumentTypesFilter<$PrismaModel>
  }

  export type EnumDocumentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | EnumDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentStatusWithAggregatesFilter<$PrismaModel> | $Enums.DocumentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentStatusFilter<$PrismaModel>
    _max?: NestedEnumDocumentStatusFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type DocumentScalarRelationFilter = {
    is?: DocumentWhereInput
    isNot?: DocumentWhereInput
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type DocumentProductCountOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    barcode?: SortOrder
    description?: SortOrder
    sellingPrice?: SortOrder
    unitOfMeasurement?: SortOrder
    quantity?: SortOrder
  }

  export type DocumentProductAvgOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    productId?: SortOrder
    sellingPrice?: SortOrder
    quantity?: SortOrder
  }

  export type DocumentProductMaxOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    barcode?: SortOrder
    description?: SortOrder
    sellingPrice?: SortOrder
    unitOfMeasurement?: SortOrder
    quantity?: SortOrder
  }

  export type DocumentProductMinOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    barcode?: SortOrder
    description?: SortOrder
    sellingPrice?: SortOrder
    unitOfMeasurement?: SortOrder
    quantity?: SortOrder
  }

  export type DocumentProductSumOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    productId?: SortOrder
    sellingPrice?: SortOrder
    quantity?: SortOrder
  }

  export type UserCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrganizationInput | UserUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrganizationInput | UserUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrganizationInput | UserUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrganizationInput | UserUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrganizationInput | UserUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrganizationInput | UserUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutUsersInput = {
    create?: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput
    connect?: OrganizationWhereUniqueInput
  }

  export type ProductCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ProductCreateWithoutOwnerInput, ProductUncheckedCreateWithoutOwnerInput> | ProductCreateWithoutOwnerInput[] | ProductUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutOwnerInput | ProductCreateOrConnectWithoutOwnerInput[]
    createMany?: ProductCreateManyOwnerInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type DocumentCreateNestedManyWithoutOwnerInput = {
    create?: XOR<DocumentCreateWithoutOwnerInput, DocumentUncheckedCreateWithoutOwnerInput> | DocumentCreateWithoutOwnerInput[] | DocumentUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutOwnerInput | DocumentCreateOrConnectWithoutOwnerInput[]
    createMany?: DocumentCreateManyOwnerInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type BusinessEntityCreateNestedManyWithoutOwnerInput = {
    create?: XOR<BusinessEntityCreateWithoutOwnerInput, BusinessEntityUncheckedCreateWithoutOwnerInput> | BusinessEntityCreateWithoutOwnerInput[] | BusinessEntityUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: BusinessEntityCreateOrConnectWithoutOwnerInput | BusinessEntityCreateOrConnectWithoutOwnerInput[]
    createMany?: BusinessEntityCreateManyOwnerInputEnvelope
    connect?: BusinessEntityWhereUniqueInput | BusinessEntityWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ProductCreateWithoutOwnerInput, ProductUncheckedCreateWithoutOwnerInput> | ProductCreateWithoutOwnerInput[] | ProductUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutOwnerInput | ProductCreateOrConnectWithoutOwnerInput[]
    createMany?: ProductCreateManyOwnerInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<DocumentCreateWithoutOwnerInput, DocumentUncheckedCreateWithoutOwnerInput> | DocumentCreateWithoutOwnerInput[] | DocumentUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutOwnerInput | DocumentCreateOrConnectWithoutOwnerInput[]
    createMany?: DocumentCreateManyOwnerInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type BusinessEntityUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<BusinessEntityCreateWithoutOwnerInput, BusinessEntityUncheckedCreateWithoutOwnerInput> | BusinessEntityCreateWithoutOwnerInput[] | BusinessEntityUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: BusinessEntityCreateOrConnectWithoutOwnerInput | BusinessEntityCreateOrConnectWithoutOwnerInput[]
    createMany?: BusinessEntityCreateManyOwnerInputEnvelope
    connect?: BusinessEntityWhereUniqueInput | BusinessEntityWhereUniqueInput[]
  }

  export type EnumRolesFieldUpdateOperationsInput = {
    set?: $Enums.Roles
  }

  export type OrganizationUpdateOneWithoutUsersNestedInput = {
    create?: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput
    upsert?: OrganizationUpsertWithoutUsersInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutUsersInput, OrganizationUpdateWithoutUsersInput>, OrganizationUncheckedUpdateWithoutUsersInput>
  }

  export type ProductUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ProductCreateWithoutOwnerInput, ProductUncheckedCreateWithoutOwnerInput> | ProductCreateWithoutOwnerInput[] | ProductUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutOwnerInput | ProductCreateOrConnectWithoutOwnerInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutOwnerInput | ProductUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ProductCreateManyOwnerInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutOwnerInput | ProductUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutOwnerInput | ProductUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type DocumentUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<DocumentCreateWithoutOwnerInput, DocumentUncheckedCreateWithoutOwnerInput> | DocumentCreateWithoutOwnerInput[] | DocumentUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutOwnerInput | DocumentCreateOrConnectWithoutOwnerInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutOwnerInput | DocumentUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: DocumentCreateManyOwnerInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutOwnerInput | DocumentUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutOwnerInput | DocumentUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type BusinessEntityUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<BusinessEntityCreateWithoutOwnerInput, BusinessEntityUncheckedCreateWithoutOwnerInput> | BusinessEntityCreateWithoutOwnerInput[] | BusinessEntityUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: BusinessEntityCreateOrConnectWithoutOwnerInput | BusinessEntityCreateOrConnectWithoutOwnerInput[]
    upsert?: BusinessEntityUpsertWithWhereUniqueWithoutOwnerInput | BusinessEntityUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: BusinessEntityCreateManyOwnerInputEnvelope
    set?: BusinessEntityWhereUniqueInput | BusinessEntityWhereUniqueInput[]
    disconnect?: BusinessEntityWhereUniqueInput | BusinessEntityWhereUniqueInput[]
    delete?: BusinessEntityWhereUniqueInput | BusinessEntityWhereUniqueInput[]
    connect?: BusinessEntityWhereUniqueInput | BusinessEntityWhereUniqueInput[]
    update?: BusinessEntityUpdateWithWhereUniqueWithoutOwnerInput | BusinessEntityUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: BusinessEntityUpdateManyWithWhereWithoutOwnerInput | BusinessEntityUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: BusinessEntityScalarWhereInput | BusinessEntityScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ProductCreateWithoutOwnerInput, ProductUncheckedCreateWithoutOwnerInput> | ProductCreateWithoutOwnerInput[] | ProductUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutOwnerInput | ProductCreateOrConnectWithoutOwnerInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutOwnerInput | ProductUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ProductCreateManyOwnerInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutOwnerInput | ProductUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutOwnerInput | ProductUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<DocumentCreateWithoutOwnerInput, DocumentUncheckedCreateWithoutOwnerInput> | DocumentCreateWithoutOwnerInput[] | DocumentUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutOwnerInput | DocumentCreateOrConnectWithoutOwnerInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutOwnerInput | DocumentUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: DocumentCreateManyOwnerInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutOwnerInput | DocumentUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutOwnerInput | DocumentUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type BusinessEntityUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<BusinessEntityCreateWithoutOwnerInput, BusinessEntityUncheckedCreateWithoutOwnerInput> | BusinessEntityCreateWithoutOwnerInput[] | BusinessEntityUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: BusinessEntityCreateOrConnectWithoutOwnerInput | BusinessEntityCreateOrConnectWithoutOwnerInput[]
    upsert?: BusinessEntityUpsertWithWhereUniqueWithoutOwnerInput | BusinessEntityUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: BusinessEntityCreateManyOwnerInputEnvelope
    set?: BusinessEntityWhereUniqueInput | BusinessEntityWhereUniqueInput[]
    disconnect?: BusinessEntityWhereUniqueInput | BusinessEntityWhereUniqueInput[]
    delete?: BusinessEntityWhereUniqueInput | BusinessEntityWhereUniqueInput[]
    connect?: BusinessEntityWhereUniqueInput | BusinessEntityWhereUniqueInput[]
    update?: BusinessEntityUpdateWithWhereUniqueWithoutOwnerInput | BusinessEntityUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: BusinessEntityUpdateManyWithWhereWithoutOwnerInput | BusinessEntityUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: BusinessEntityScalarWhereInput | BusinessEntityScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBusinessEntitiesInput = {
    create?: XOR<UserCreateWithoutBusinessEntitiesInput, UserUncheckedCreateWithoutBusinessEntitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBusinessEntitiesInput
    connect?: UserWhereUniqueInput
  }

  export type DocumentCreateNestedManyWithoutBusinessEntityInput = {
    create?: XOR<DocumentCreateWithoutBusinessEntityInput, DocumentUncheckedCreateWithoutBusinessEntityInput> | DocumentCreateWithoutBusinessEntityInput[] | DocumentUncheckedCreateWithoutBusinessEntityInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutBusinessEntityInput | DocumentCreateOrConnectWithoutBusinessEntityInput[]
    createMany?: DocumentCreateManyBusinessEntityInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutBusinessEntityInput = {
    create?: XOR<DocumentCreateWithoutBusinessEntityInput, DocumentUncheckedCreateWithoutBusinessEntityInput> | DocumentCreateWithoutBusinessEntityInput[] | DocumentUncheckedCreateWithoutBusinessEntityInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutBusinessEntityInput | DocumentCreateOrConnectWithoutBusinessEntityInput[]
    createMany?: DocumentCreateManyBusinessEntityInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type EnumEntityTypeFieldUpdateOperationsInput = {
    set?: $Enums.EntityType
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumEntityStatusFieldUpdateOperationsInput = {
    set?: $Enums.EntityStatus
  }

  export type UserUpdateOneRequiredWithoutBusinessEntitiesNestedInput = {
    create?: XOR<UserCreateWithoutBusinessEntitiesInput, UserUncheckedCreateWithoutBusinessEntitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBusinessEntitiesInput
    upsert?: UserUpsertWithoutBusinessEntitiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBusinessEntitiesInput, UserUpdateWithoutBusinessEntitiesInput>, UserUncheckedUpdateWithoutBusinessEntitiesInput>
  }

  export type DocumentUpdateManyWithoutBusinessEntityNestedInput = {
    create?: XOR<DocumentCreateWithoutBusinessEntityInput, DocumentUncheckedCreateWithoutBusinessEntityInput> | DocumentCreateWithoutBusinessEntityInput[] | DocumentUncheckedCreateWithoutBusinessEntityInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutBusinessEntityInput | DocumentCreateOrConnectWithoutBusinessEntityInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutBusinessEntityInput | DocumentUpsertWithWhereUniqueWithoutBusinessEntityInput[]
    createMany?: DocumentCreateManyBusinessEntityInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutBusinessEntityInput | DocumentUpdateWithWhereUniqueWithoutBusinessEntityInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutBusinessEntityInput | DocumentUpdateManyWithWhereWithoutBusinessEntityInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutBusinessEntityNestedInput = {
    create?: XOR<DocumentCreateWithoutBusinessEntityInput, DocumentUncheckedCreateWithoutBusinessEntityInput> | DocumentCreateWithoutBusinessEntityInput[] | DocumentUncheckedCreateWithoutBusinessEntityInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutBusinessEntityInput | DocumentCreateOrConnectWithoutBusinessEntityInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutBusinessEntityInput | DocumentUpsertWithWhereUniqueWithoutBusinessEntityInput[]
    createMany?: DocumentCreateManyBusinessEntityInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutBusinessEntityInput | DocumentUpdateWithWhereUniqueWithoutBusinessEntityInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutBusinessEntityInput | DocumentUpdateManyWithWhereWithoutBusinessEntityInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProductsInput = {
    create?: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductsInput
    connect?: UserWhereUniqueInput
  }

  export type DocumentProductCreateNestedManyWithoutProductInput = {
    create?: XOR<DocumentProductCreateWithoutProductInput, DocumentProductUncheckedCreateWithoutProductInput> | DocumentProductCreateWithoutProductInput[] | DocumentProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DocumentProductCreateOrConnectWithoutProductInput | DocumentProductCreateOrConnectWithoutProductInput[]
    createMany?: DocumentProductCreateManyProductInputEnvelope
    connect?: DocumentProductWhereUniqueInput | DocumentProductWhereUniqueInput[]
  }

  export type DocumentProductUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<DocumentProductCreateWithoutProductInput, DocumentProductUncheckedCreateWithoutProductInput> | DocumentProductCreateWithoutProductInput[] | DocumentProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DocumentProductCreateOrConnectWithoutProductInput | DocumentProductCreateOrConnectWithoutProductInput[]
    createMany?: DocumentProductCreateManyProductInputEnvelope
    connect?: DocumentProductWhereUniqueInput | DocumentProductWhereUniqueInput[]
  }

  export type EnumMeasurementsFieldUpdateOperationsInput = {
    set?: $Enums.Measurements
  }

  export type UserUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductsInput
    upsert?: UserUpsertWithoutProductsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProductsInput, UserUpdateWithoutProductsInput>, UserUncheckedUpdateWithoutProductsInput>
  }

  export type DocumentProductUpdateManyWithoutProductNestedInput = {
    create?: XOR<DocumentProductCreateWithoutProductInput, DocumentProductUncheckedCreateWithoutProductInput> | DocumentProductCreateWithoutProductInput[] | DocumentProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DocumentProductCreateOrConnectWithoutProductInput | DocumentProductCreateOrConnectWithoutProductInput[]
    upsert?: DocumentProductUpsertWithWhereUniqueWithoutProductInput | DocumentProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: DocumentProductCreateManyProductInputEnvelope
    set?: DocumentProductWhereUniqueInput | DocumentProductWhereUniqueInput[]
    disconnect?: DocumentProductWhereUniqueInput | DocumentProductWhereUniqueInput[]
    delete?: DocumentProductWhereUniqueInput | DocumentProductWhereUniqueInput[]
    connect?: DocumentProductWhereUniqueInput | DocumentProductWhereUniqueInput[]
    update?: DocumentProductUpdateWithWhereUniqueWithoutProductInput | DocumentProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: DocumentProductUpdateManyWithWhereWithoutProductInput | DocumentProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: DocumentProductScalarWhereInput | DocumentProductScalarWhereInput[]
  }

  export type DocumentProductUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<DocumentProductCreateWithoutProductInput, DocumentProductUncheckedCreateWithoutProductInput> | DocumentProductCreateWithoutProductInput[] | DocumentProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DocumentProductCreateOrConnectWithoutProductInput | DocumentProductCreateOrConnectWithoutProductInput[]
    upsert?: DocumentProductUpsertWithWhereUniqueWithoutProductInput | DocumentProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: DocumentProductCreateManyProductInputEnvelope
    set?: DocumentProductWhereUniqueInput | DocumentProductWhereUniqueInput[]
    disconnect?: DocumentProductWhereUniqueInput | DocumentProductWhereUniqueInput[]
    delete?: DocumentProductWhereUniqueInput | DocumentProductWhereUniqueInput[]
    connect?: DocumentProductWhereUniqueInput | DocumentProductWhereUniqueInput[]
    update?: DocumentProductUpdateWithWhereUniqueWithoutProductInput | DocumentProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: DocumentProductUpdateManyWithWhereWithoutProductInput | DocumentProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: DocumentProductScalarWhereInput | DocumentProductScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDocumentsInput
    connect?: UserWhereUniqueInput
  }

  export type BusinessEntityCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<BusinessEntityCreateWithoutDocumentsInput, BusinessEntityUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: BusinessEntityCreateOrConnectWithoutDocumentsInput
    connect?: BusinessEntityWhereUniqueInput
  }

  export type DocumentProductCreateNestedManyWithoutDocumentInput = {
    create?: XOR<DocumentProductCreateWithoutDocumentInput, DocumentProductUncheckedCreateWithoutDocumentInput> | DocumentProductCreateWithoutDocumentInput[] | DocumentProductUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentProductCreateOrConnectWithoutDocumentInput | DocumentProductCreateOrConnectWithoutDocumentInput[]
    createMany?: DocumentProductCreateManyDocumentInputEnvelope
    connect?: DocumentProductWhereUniqueInput | DocumentProductWhereUniqueInput[]
  }

  export type DocumentProductUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<DocumentProductCreateWithoutDocumentInput, DocumentProductUncheckedCreateWithoutDocumentInput> | DocumentProductCreateWithoutDocumentInput[] | DocumentProductUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentProductCreateOrConnectWithoutDocumentInput | DocumentProductCreateOrConnectWithoutDocumentInput[]
    createMany?: DocumentProductCreateManyDocumentInputEnvelope
    connect?: DocumentProductWhereUniqueInput | DocumentProductWhereUniqueInput[]
  }

  export type EnumDocumentTypesFieldUpdateOperationsInput = {
    set?: $Enums.DocumentTypes
  }

  export type EnumDocumentStatusFieldUpdateOperationsInput = {
    set?: $Enums.DocumentStatus
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type UserUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDocumentsInput
    upsert?: UserUpsertWithoutDocumentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDocumentsInput, UserUpdateWithoutDocumentsInput>, UserUncheckedUpdateWithoutDocumentsInput>
  }

  export type BusinessEntityUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<BusinessEntityCreateWithoutDocumentsInput, BusinessEntityUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: BusinessEntityCreateOrConnectWithoutDocumentsInput
    upsert?: BusinessEntityUpsertWithoutDocumentsInput
    connect?: BusinessEntityWhereUniqueInput
    update?: XOR<XOR<BusinessEntityUpdateToOneWithWhereWithoutDocumentsInput, BusinessEntityUpdateWithoutDocumentsInput>, BusinessEntityUncheckedUpdateWithoutDocumentsInput>
  }

  export type DocumentProductUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<DocumentProductCreateWithoutDocumentInput, DocumentProductUncheckedCreateWithoutDocumentInput> | DocumentProductCreateWithoutDocumentInput[] | DocumentProductUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentProductCreateOrConnectWithoutDocumentInput | DocumentProductCreateOrConnectWithoutDocumentInput[]
    upsert?: DocumentProductUpsertWithWhereUniqueWithoutDocumentInput | DocumentProductUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: DocumentProductCreateManyDocumentInputEnvelope
    set?: DocumentProductWhereUniqueInput | DocumentProductWhereUniqueInput[]
    disconnect?: DocumentProductWhereUniqueInput | DocumentProductWhereUniqueInput[]
    delete?: DocumentProductWhereUniqueInput | DocumentProductWhereUniqueInput[]
    connect?: DocumentProductWhereUniqueInput | DocumentProductWhereUniqueInput[]
    update?: DocumentProductUpdateWithWhereUniqueWithoutDocumentInput | DocumentProductUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: DocumentProductUpdateManyWithWhereWithoutDocumentInput | DocumentProductUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: DocumentProductScalarWhereInput | DocumentProductScalarWhereInput[]
  }

  export type DocumentProductUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<DocumentProductCreateWithoutDocumentInput, DocumentProductUncheckedCreateWithoutDocumentInput> | DocumentProductCreateWithoutDocumentInput[] | DocumentProductUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentProductCreateOrConnectWithoutDocumentInput | DocumentProductCreateOrConnectWithoutDocumentInput[]
    upsert?: DocumentProductUpsertWithWhereUniqueWithoutDocumentInput | DocumentProductUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: DocumentProductCreateManyDocumentInputEnvelope
    set?: DocumentProductWhereUniqueInput | DocumentProductWhereUniqueInput[]
    disconnect?: DocumentProductWhereUniqueInput | DocumentProductWhereUniqueInput[]
    delete?: DocumentProductWhereUniqueInput | DocumentProductWhereUniqueInput[]
    connect?: DocumentProductWhereUniqueInput | DocumentProductWhereUniqueInput[]
    update?: DocumentProductUpdateWithWhereUniqueWithoutDocumentInput | DocumentProductUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: DocumentProductUpdateManyWithWhereWithoutDocumentInput | DocumentProductUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: DocumentProductScalarWhereInput | DocumentProductScalarWhereInput[]
  }

  export type DocumentCreateNestedOneWithoutProductsInput = {
    create?: XOR<DocumentCreateWithoutProductsInput, DocumentUncheckedCreateWithoutProductsInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutProductsInput
    connect?: DocumentWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<ProductCreateWithoutDocumentsInput, ProductUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutDocumentsInput
    connect?: ProductWhereUniqueInput
  }

  export type DocumentUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<DocumentCreateWithoutProductsInput, DocumentUncheckedCreateWithoutProductsInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutProductsInput
    upsert?: DocumentUpsertWithoutProductsInput
    connect?: DocumentWhereUniqueInput
    update?: XOR<XOR<DocumentUpdateToOneWithWhereWithoutProductsInput, DocumentUpdateWithoutProductsInput>, DocumentUncheckedUpdateWithoutProductsInput>
  }

  export type ProductUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<ProductCreateWithoutDocumentsInput, ProductUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutDocumentsInput
    upsert?: ProductUpsertWithoutDocumentsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutDocumentsInput, ProductUpdateWithoutDocumentsInput>, ProductUncheckedUpdateWithoutDocumentsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumRolesFilter<$PrismaModel> | $Enums.Roles
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumRolesWithAggregatesFilter<$PrismaModel> | $Enums.Roles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolesFilter<$PrismaModel>
    _max?: NestedEnumRolesFilter<$PrismaModel>
  }

  export type NestedEnumEntityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EntityType | EnumEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEntityTypeFilter<$PrismaModel> | $Enums.EntityType
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumEntityStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EntityStatus | EnumEntityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EntityStatus[] | ListEnumEntityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EntityStatus[] | ListEnumEntityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEntityStatusFilter<$PrismaModel> | $Enums.EntityStatus
  }

  export type NestedEnumEntityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EntityType | EnumEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEntityTypeWithAggregatesFilter<$PrismaModel> | $Enums.EntityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEntityTypeFilter<$PrismaModel>
    _max?: NestedEnumEntityTypeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumEntityStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EntityStatus | EnumEntityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EntityStatus[] | ListEnumEntityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EntityStatus[] | ListEnumEntityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEntityStatusWithAggregatesFilter<$PrismaModel> | $Enums.EntityStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEntityStatusFilter<$PrismaModel>
    _max?: NestedEnumEntityStatusFilter<$PrismaModel>
  }

  export type NestedEnumMeasurementsFilter<$PrismaModel = never> = {
    equals?: $Enums.Measurements | EnumMeasurementsFieldRefInput<$PrismaModel>
    in?: $Enums.Measurements[] | ListEnumMeasurementsFieldRefInput<$PrismaModel>
    notIn?: $Enums.Measurements[] | ListEnumMeasurementsFieldRefInput<$PrismaModel>
    not?: NestedEnumMeasurementsFilter<$PrismaModel> | $Enums.Measurements
  }

  export type NestedEnumMeasurementsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Measurements | EnumMeasurementsFieldRefInput<$PrismaModel>
    in?: $Enums.Measurements[] | ListEnumMeasurementsFieldRefInput<$PrismaModel>
    notIn?: $Enums.Measurements[] | ListEnumMeasurementsFieldRefInput<$PrismaModel>
    not?: NestedEnumMeasurementsWithAggregatesFilter<$PrismaModel> | $Enums.Measurements
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMeasurementsFilter<$PrismaModel>
    _max?: NestedEnumMeasurementsFilter<$PrismaModel>
  }

  export type NestedEnumDocumentTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentTypes | EnumDocumentTypesFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentTypes[] | ListEnumDocumentTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentTypes[] | ListEnumDocumentTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypesFilter<$PrismaModel> | $Enums.DocumentTypes
  }

  export type NestedEnumDocumentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | EnumDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentStatusFilter<$PrismaModel> | $Enums.DocumentStatus
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumDocumentTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentTypes | EnumDocumentTypesFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentTypes[] | ListEnumDocumentTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentTypes[] | ListEnumDocumentTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypesWithAggregatesFilter<$PrismaModel> | $Enums.DocumentTypes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentTypesFilter<$PrismaModel>
    _max?: NestedEnumDocumentTypesFilter<$PrismaModel>
  }

  export type NestedEnumDocumentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | EnumDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentStatusWithAggregatesFilter<$PrismaModel> | $Enums.DocumentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentStatusFilter<$PrismaModel>
    _max?: NestedEnumDocumentStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type UserCreateWithoutOrganizationInput = {
    username: string
    password: string
    firstname: string
    middlename?: string | null
    lastname: string
    email: string
    phone?: string | null
    image?: string | null
    role: $Enums.Roles
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductCreateNestedManyWithoutOwnerInput
    documents?: DocumentCreateNestedManyWithoutOwnerInput
    businessEntities?: BusinessEntityCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutOrganizationInput = {
    id?: number
    username: string
    password: string
    firstname: string
    middlename?: string | null
    lastname: string
    email: string
    phone?: string | null
    image?: string | null
    role: $Enums.Roles
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutOwnerInput
    documents?: DocumentUncheckedCreateNestedManyWithoutOwnerInput
    businessEntities?: BusinessEntityUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput>
  }

  export type UserCreateManyOrganizationInputEnvelope = {
    data: UserCreateManyOrganizationInput | UserCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutOrganizationInput, UserUncheckedUpdateWithoutOrganizationInput>
    create: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput>
  }

  export type UserUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutOrganizationInput, UserUncheckedUpdateWithoutOrganizationInput>
  }

  export type UserUpdateManyWithWhereWithoutOrganizationInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    orgId?: IntNullableFilter<"User"> | number | null
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstname?: StringFilter<"User"> | string
    middlename?: StringNullableFilter<"User"> | string | null
    lastname?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumRolesFilter<"User"> | $Enums.Roles
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type OrganizationCreateWithoutUsersInput = {
    name: string
    street1?: string | null
    street2?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    zip?: string | null
    phone: string
    email: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    street1?: string | null
    street2?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    zip?: string | null
    phone: string
    email: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationCreateOrConnectWithoutUsersInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
  }

  export type ProductCreateWithoutOwnerInput = {
    name: string
    sku: string
    barcode: string
    description?: string | null
    costPrice: Decimal | DecimalJsLike | number | string
    unitOfMeasurement: $Enums.Measurements
    quantity: Decimal | DecimalJsLike | number | string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutOwnerInput = {
    id?: number
    name: string
    sku: string
    barcode: string
    description?: string | null
    costPrice: Decimal | DecimalJsLike | number | string
    unitOfMeasurement: $Enums.Measurements
    quantity: Decimal | DecimalJsLike | number | string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutOwnerInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOwnerInput, ProductUncheckedCreateWithoutOwnerInput>
  }

  export type ProductCreateManyOwnerInputEnvelope = {
    data: ProductCreateManyOwnerInput | ProductCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type DocumentCreateWithoutOwnerInput = {
    documentCode: string
    documentType: $Enums.DocumentTypes
    documentStatus: $Enums.DocumentStatus
    paymentStatus: $Enums.PaymentStatus
    date?: Date | string
    dueDate: Date | string
    vatAmount: Decimal | DecimalJsLike | number | string
    vatRate: Decimal | DecimalJsLike | number | string
    amountBeforeVat: Decimal | DecimalJsLike | number | string
    amountAfterVat: Decimal | DecimalJsLike | number | string
    taxWithheldAmount?: Decimal | DecimalJsLike | number | string | null
    withHoldingTaxRate?: Decimal | DecimalJsLike | number | string | null
    withHoldingTaxAmount?: Decimal | DecimalJsLike | number | string | null
    note?: string | null
    memorandum?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    businessEntity: BusinessEntityCreateNestedOneWithoutDocumentsInput
    products?: DocumentProductCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateWithoutOwnerInput = {
    id?: number
    businessEntityId: number
    documentCode: string
    documentType: $Enums.DocumentTypes
    documentStatus: $Enums.DocumentStatus
    paymentStatus: $Enums.PaymentStatus
    date?: Date | string
    dueDate: Date | string
    vatAmount: Decimal | DecimalJsLike | number | string
    vatRate: Decimal | DecimalJsLike | number | string
    amountBeforeVat: Decimal | DecimalJsLike | number | string
    amountAfterVat: Decimal | DecimalJsLike | number | string
    taxWithheldAmount?: Decimal | DecimalJsLike | number | string | null
    withHoldingTaxRate?: Decimal | DecimalJsLike | number | string | null
    withHoldingTaxAmount?: Decimal | DecimalJsLike | number | string | null
    note?: string | null
    memorandum?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: DocumentProductUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentCreateOrConnectWithoutOwnerInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutOwnerInput, DocumentUncheckedCreateWithoutOwnerInput>
  }

  export type DocumentCreateManyOwnerInputEnvelope = {
    data: DocumentCreateManyOwnerInput | DocumentCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type BusinessEntityCreateWithoutOwnerInput = {
    type: $Enums.EntityType
    name: string
    trn: string
    description?: string | null
    note?: string | null
    defaultMarkup?: Decimal | DecimalJsLike | number | string | null
    standardMarkup?: Decimal | DecimalJsLike | number | string | null
    website?: string | null
    street1?: string | null
    street2?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    zip?: string | null
    contactTitle?: string | null
    contactFirstName?: string | null
    contactMiddleName?: string | null
    contactLastName?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    creditLimit: Decimal | DecimalJsLike | number | string
    openBalance: Decimal | DecimalJsLike | number | string
    totalOverdue: Decimal | DecimalJsLike | number | string
    status?: $Enums.EntityStatus
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentCreateNestedManyWithoutBusinessEntityInput
  }

  export type BusinessEntityUncheckedCreateWithoutOwnerInput = {
    id?: number
    type: $Enums.EntityType
    name: string
    trn: string
    description?: string | null
    note?: string | null
    defaultMarkup?: Decimal | DecimalJsLike | number | string | null
    standardMarkup?: Decimal | DecimalJsLike | number | string | null
    website?: string | null
    street1?: string | null
    street2?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    zip?: string | null
    contactTitle?: string | null
    contactFirstName?: string | null
    contactMiddleName?: string | null
    contactLastName?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    creditLimit: Decimal | DecimalJsLike | number | string
    openBalance: Decimal | DecimalJsLike | number | string
    totalOverdue: Decimal | DecimalJsLike | number | string
    status?: $Enums.EntityStatus
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutBusinessEntityInput
  }

  export type BusinessEntityCreateOrConnectWithoutOwnerInput = {
    where: BusinessEntityWhereUniqueInput
    create: XOR<BusinessEntityCreateWithoutOwnerInput, BusinessEntityUncheckedCreateWithoutOwnerInput>
  }

  export type BusinessEntityCreateManyOwnerInputEnvelope = {
    data: BusinessEntityCreateManyOwnerInput | BusinessEntityCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutUsersInput = {
    update: XOR<OrganizationUpdateWithoutUsersInput, OrganizationUncheckedUpdateWithoutUsersInput>
    create: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutUsersInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutUsersInput, OrganizationUncheckedUpdateWithoutUsersInput>
  }

  export type OrganizationUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    street1?: NullableStringFieldUpdateOperationsInput | string | null
    street2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    street1?: NullableStringFieldUpdateOperationsInput | string | null
    street2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutOwnerInput, ProductUncheckedUpdateWithoutOwnerInput>
    create: XOR<ProductCreateWithoutOwnerInput, ProductUncheckedCreateWithoutOwnerInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutOwnerInput, ProductUncheckedUpdateWithoutOwnerInput>
  }

  export type ProductUpdateManyWithWhereWithoutOwnerInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutOwnerInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    ownerId?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    sku?: StringFilter<"Product"> | string
    barcode?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    costPrice?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    unitOfMeasurement?: EnumMeasurementsFilter<"Product"> | $Enums.Measurements
    quantity?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    image?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type DocumentUpsertWithWhereUniqueWithoutOwnerInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutOwnerInput, DocumentUncheckedUpdateWithoutOwnerInput>
    create: XOR<DocumentCreateWithoutOwnerInput, DocumentUncheckedCreateWithoutOwnerInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutOwnerInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutOwnerInput, DocumentUncheckedUpdateWithoutOwnerInput>
  }

  export type DocumentUpdateManyWithWhereWithoutOwnerInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutOwnerInput>
  }

  export type DocumentScalarWhereInput = {
    AND?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    OR?: DocumentScalarWhereInput[]
    NOT?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    id?: IntFilter<"Document"> | number
    ownerId?: IntFilter<"Document"> | number
    businessEntityId?: IntFilter<"Document"> | number
    documentCode?: StringFilter<"Document"> | string
    documentType?: EnumDocumentTypesFilter<"Document"> | $Enums.DocumentTypes
    documentStatus?: EnumDocumentStatusFilter<"Document"> | $Enums.DocumentStatus
    paymentStatus?: EnumPaymentStatusFilter<"Document"> | $Enums.PaymentStatus
    date?: DateTimeFilter<"Document"> | Date | string
    dueDate?: DateTimeFilter<"Document"> | Date | string
    vatAmount?: DecimalFilter<"Document"> | Decimal | DecimalJsLike | number | string
    vatRate?: DecimalFilter<"Document"> | Decimal | DecimalJsLike | number | string
    amountBeforeVat?: DecimalFilter<"Document"> | Decimal | DecimalJsLike | number | string
    amountAfterVat?: DecimalFilter<"Document"> | Decimal | DecimalJsLike | number | string
    taxWithheldAmount?: DecimalNullableFilter<"Document"> | Decimal | DecimalJsLike | number | string | null
    withHoldingTaxRate?: DecimalNullableFilter<"Document"> | Decimal | DecimalJsLike | number | string | null
    withHoldingTaxAmount?: DecimalNullableFilter<"Document"> | Decimal | DecimalJsLike | number | string | null
    note?: StringNullableFilter<"Document"> | string | null
    memorandum?: StringNullableFilter<"Document"> | string | null
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
  }

  export type BusinessEntityUpsertWithWhereUniqueWithoutOwnerInput = {
    where: BusinessEntityWhereUniqueInput
    update: XOR<BusinessEntityUpdateWithoutOwnerInput, BusinessEntityUncheckedUpdateWithoutOwnerInput>
    create: XOR<BusinessEntityCreateWithoutOwnerInput, BusinessEntityUncheckedCreateWithoutOwnerInput>
  }

  export type BusinessEntityUpdateWithWhereUniqueWithoutOwnerInput = {
    where: BusinessEntityWhereUniqueInput
    data: XOR<BusinessEntityUpdateWithoutOwnerInput, BusinessEntityUncheckedUpdateWithoutOwnerInput>
  }

  export type BusinessEntityUpdateManyWithWhereWithoutOwnerInput = {
    where: BusinessEntityScalarWhereInput
    data: XOR<BusinessEntityUpdateManyMutationInput, BusinessEntityUncheckedUpdateManyWithoutOwnerInput>
  }

  export type BusinessEntityScalarWhereInput = {
    AND?: BusinessEntityScalarWhereInput | BusinessEntityScalarWhereInput[]
    OR?: BusinessEntityScalarWhereInput[]
    NOT?: BusinessEntityScalarWhereInput | BusinessEntityScalarWhereInput[]
    id?: IntFilter<"BusinessEntity"> | number
    type?: EnumEntityTypeFilter<"BusinessEntity"> | $Enums.EntityType
    ownerId?: IntFilter<"BusinessEntity"> | number
    name?: StringFilter<"BusinessEntity"> | string
    trn?: StringFilter<"BusinessEntity"> | string
    description?: StringNullableFilter<"BusinessEntity"> | string | null
    note?: StringNullableFilter<"BusinessEntity"> | string | null
    defaultMarkup?: DecimalNullableFilter<"BusinessEntity"> | Decimal | DecimalJsLike | number | string | null
    standardMarkup?: DecimalNullableFilter<"BusinessEntity"> | Decimal | DecimalJsLike | number | string | null
    website?: StringNullableFilter<"BusinessEntity"> | string | null
    street1?: StringNullableFilter<"BusinessEntity"> | string | null
    street2?: StringNullableFilter<"BusinessEntity"> | string | null
    city?: StringNullableFilter<"BusinessEntity"> | string | null
    state?: StringNullableFilter<"BusinessEntity"> | string | null
    country?: StringNullableFilter<"BusinessEntity"> | string | null
    zip?: StringNullableFilter<"BusinessEntity"> | string | null
    contactTitle?: StringNullableFilter<"BusinessEntity"> | string | null
    contactFirstName?: StringNullableFilter<"BusinessEntity"> | string | null
    contactMiddleName?: StringNullableFilter<"BusinessEntity"> | string | null
    contactLastName?: StringNullableFilter<"BusinessEntity"> | string | null
    contactPhone?: StringNullableFilter<"BusinessEntity"> | string | null
    contactEmail?: StringNullableFilter<"BusinessEntity"> | string | null
    creditLimit?: DecimalFilter<"BusinessEntity"> | Decimal | DecimalJsLike | number | string
    openBalance?: DecimalFilter<"BusinessEntity"> | Decimal | DecimalJsLike | number | string
    totalOverdue?: DecimalFilter<"BusinessEntity"> | Decimal | DecimalJsLike | number | string
    status?: EnumEntityStatusFilter<"BusinessEntity"> | $Enums.EntityStatus
    image?: StringFilter<"BusinessEntity"> | string
    createdAt?: DateTimeFilter<"BusinessEntity"> | Date | string
    updatedAt?: DateTimeFilter<"BusinessEntity"> | Date | string
  }

  export type UserCreateWithoutBusinessEntitiesInput = {
    username: string
    password: string
    firstname: string
    middlename?: string | null
    lastname: string
    email: string
    phone?: string | null
    image?: string | null
    role: $Enums.Roles
    createdAt?: Date | string
    updatedAt?: Date | string
    organization?: OrganizationCreateNestedOneWithoutUsersInput
    products?: ProductCreateNestedManyWithoutOwnerInput
    documents?: DocumentCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutBusinessEntitiesInput = {
    id?: number
    orgId?: number | null
    username: string
    password: string
    firstname: string
    middlename?: string | null
    lastname: string
    email: string
    phone?: string | null
    image?: string | null
    role: $Enums.Roles
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutOwnerInput
    documents?: DocumentUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutBusinessEntitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBusinessEntitiesInput, UserUncheckedCreateWithoutBusinessEntitiesInput>
  }

  export type DocumentCreateWithoutBusinessEntityInput = {
    documentCode: string
    documentType: $Enums.DocumentTypes
    documentStatus: $Enums.DocumentStatus
    paymentStatus: $Enums.PaymentStatus
    date?: Date | string
    dueDate: Date | string
    vatAmount: Decimal | DecimalJsLike | number | string
    vatRate: Decimal | DecimalJsLike | number | string
    amountBeforeVat: Decimal | DecimalJsLike | number | string
    amountAfterVat: Decimal | DecimalJsLike | number | string
    taxWithheldAmount?: Decimal | DecimalJsLike | number | string | null
    withHoldingTaxRate?: Decimal | DecimalJsLike | number | string | null
    withHoldingTaxAmount?: Decimal | DecimalJsLike | number | string | null
    note?: string | null
    memorandum?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutDocumentsInput
    products?: DocumentProductCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateWithoutBusinessEntityInput = {
    id?: number
    ownerId: number
    documentCode: string
    documentType: $Enums.DocumentTypes
    documentStatus: $Enums.DocumentStatus
    paymentStatus: $Enums.PaymentStatus
    date?: Date | string
    dueDate: Date | string
    vatAmount: Decimal | DecimalJsLike | number | string
    vatRate: Decimal | DecimalJsLike | number | string
    amountBeforeVat: Decimal | DecimalJsLike | number | string
    amountAfterVat: Decimal | DecimalJsLike | number | string
    taxWithheldAmount?: Decimal | DecimalJsLike | number | string | null
    withHoldingTaxRate?: Decimal | DecimalJsLike | number | string | null
    withHoldingTaxAmount?: Decimal | DecimalJsLike | number | string | null
    note?: string | null
    memorandum?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: DocumentProductUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentCreateOrConnectWithoutBusinessEntityInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutBusinessEntityInput, DocumentUncheckedCreateWithoutBusinessEntityInput>
  }

  export type DocumentCreateManyBusinessEntityInputEnvelope = {
    data: DocumentCreateManyBusinessEntityInput | DocumentCreateManyBusinessEntityInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBusinessEntitiesInput = {
    update: XOR<UserUpdateWithoutBusinessEntitiesInput, UserUncheckedUpdateWithoutBusinessEntitiesInput>
    create: XOR<UserCreateWithoutBusinessEntitiesInput, UserUncheckedCreateWithoutBusinessEntitiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBusinessEntitiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBusinessEntitiesInput, UserUncheckedUpdateWithoutBusinessEntitiesInput>
  }

  export type UserUpdateWithoutBusinessEntitiesInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneWithoutUsersNestedInput
    products?: ProductUpdateManyWithoutOwnerNestedInput
    documents?: DocumentUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutBusinessEntitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    orgId?: NullableIntFieldUpdateOperationsInput | number | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutOwnerNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type DocumentUpsertWithWhereUniqueWithoutBusinessEntityInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutBusinessEntityInput, DocumentUncheckedUpdateWithoutBusinessEntityInput>
    create: XOR<DocumentCreateWithoutBusinessEntityInput, DocumentUncheckedCreateWithoutBusinessEntityInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutBusinessEntityInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutBusinessEntityInput, DocumentUncheckedUpdateWithoutBusinessEntityInput>
  }

  export type DocumentUpdateManyWithWhereWithoutBusinessEntityInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutBusinessEntityInput>
  }

  export type UserCreateWithoutProductsInput = {
    username: string
    password: string
    firstname: string
    middlename?: string | null
    lastname: string
    email: string
    phone?: string | null
    image?: string | null
    role: $Enums.Roles
    createdAt?: Date | string
    updatedAt?: Date | string
    organization?: OrganizationCreateNestedOneWithoutUsersInput
    documents?: DocumentCreateNestedManyWithoutOwnerInput
    businessEntities?: BusinessEntityCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutProductsInput = {
    id?: number
    orgId?: number | null
    username: string
    password: string
    firstname: string
    middlename?: string | null
    lastname: string
    email: string
    phone?: string | null
    image?: string | null
    role: $Enums.Roles
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutOwnerInput
    businessEntities?: BusinessEntityUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutProductsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput>
  }

  export type DocumentProductCreateWithoutProductInput = {
    name: string
    sku: string
    barcode: string
    description?: string | null
    sellingPrice: Decimal | DecimalJsLike | number | string
    unitOfMeasurement: $Enums.Measurements
    quantity: Decimal | DecimalJsLike | number | string
    document: DocumentCreateNestedOneWithoutProductsInput
  }

  export type DocumentProductUncheckedCreateWithoutProductInput = {
    id?: number
    documentId: number
    name: string
    sku: string
    barcode: string
    description?: string | null
    sellingPrice: Decimal | DecimalJsLike | number | string
    unitOfMeasurement: $Enums.Measurements
    quantity: Decimal | DecimalJsLike | number | string
  }

  export type DocumentProductCreateOrConnectWithoutProductInput = {
    where: DocumentProductWhereUniqueInput
    create: XOR<DocumentProductCreateWithoutProductInput, DocumentProductUncheckedCreateWithoutProductInput>
  }

  export type DocumentProductCreateManyProductInputEnvelope = {
    data: DocumentProductCreateManyProductInput | DocumentProductCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProductsInput = {
    update: XOR<UserUpdateWithoutProductsInput, UserUncheckedUpdateWithoutProductsInput>
    create: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProductsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProductsInput, UserUncheckedUpdateWithoutProductsInput>
  }

  export type UserUpdateWithoutProductsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneWithoutUsersNestedInput
    documents?: DocumentUpdateManyWithoutOwnerNestedInput
    businessEntities?: BusinessEntityUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    orgId?: NullableIntFieldUpdateOperationsInput | number | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutOwnerNestedInput
    businessEntities?: BusinessEntityUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type DocumentProductUpsertWithWhereUniqueWithoutProductInput = {
    where: DocumentProductWhereUniqueInput
    update: XOR<DocumentProductUpdateWithoutProductInput, DocumentProductUncheckedUpdateWithoutProductInput>
    create: XOR<DocumentProductCreateWithoutProductInput, DocumentProductUncheckedCreateWithoutProductInput>
  }

  export type DocumentProductUpdateWithWhereUniqueWithoutProductInput = {
    where: DocumentProductWhereUniqueInput
    data: XOR<DocumentProductUpdateWithoutProductInput, DocumentProductUncheckedUpdateWithoutProductInput>
  }

  export type DocumentProductUpdateManyWithWhereWithoutProductInput = {
    where: DocumentProductScalarWhereInput
    data: XOR<DocumentProductUpdateManyMutationInput, DocumentProductUncheckedUpdateManyWithoutProductInput>
  }

  export type DocumentProductScalarWhereInput = {
    AND?: DocumentProductScalarWhereInput | DocumentProductScalarWhereInput[]
    OR?: DocumentProductScalarWhereInput[]
    NOT?: DocumentProductScalarWhereInput | DocumentProductScalarWhereInput[]
    id?: IntFilter<"DocumentProduct"> | number
    documentId?: IntFilter<"DocumentProduct"> | number
    productId?: IntFilter<"DocumentProduct"> | number
    name?: StringFilter<"DocumentProduct"> | string
    sku?: StringFilter<"DocumentProduct"> | string
    barcode?: StringFilter<"DocumentProduct"> | string
    description?: StringNullableFilter<"DocumentProduct"> | string | null
    sellingPrice?: DecimalFilter<"DocumentProduct"> | Decimal | DecimalJsLike | number | string
    unitOfMeasurement?: EnumMeasurementsFilter<"DocumentProduct"> | $Enums.Measurements
    quantity?: DecimalFilter<"DocumentProduct"> | Decimal | DecimalJsLike | number | string
  }

  export type UserCreateWithoutDocumentsInput = {
    username: string
    password: string
    firstname: string
    middlename?: string | null
    lastname: string
    email: string
    phone?: string | null
    image?: string | null
    role: $Enums.Roles
    createdAt?: Date | string
    updatedAt?: Date | string
    organization?: OrganizationCreateNestedOneWithoutUsersInput
    products?: ProductCreateNestedManyWithoutOwnerInput
    businessEntities?: BusinessEntityCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutDocumentsInput = {
    id?: number
    orgId?: number | null
    username: string
    password: string
    firstname: string
    middlename?: string | null
    lastname: string
    email: string
    phone?: string | null
    image?: string | null
    role: $Enums.Roles
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutOwnerInput
    businessEntities?: BusinessEntityUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutDocumentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
  }

  export type BusinessEntityCreateWithoutDocumentsInput = {
    type: $Enums.EntityType
    name: string
    trn: string
    description?: string | null
    note?: string | null
    defaultMarkup?: Decimal | DecimalJsLike | number | string | null
    standardMarkup?: Decimal | DecimalJsLike | number | string | null
    website?: string | null
    street1?: string | null
    street2?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    zip?: string | null
    contactTitle?: string | null
    contactFirstName?: string | null
    contactMiddleName?: string | null
    contactLastName?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    creditLimit: Decimal | DecimalJsLike | number | string
    openBalance: Decimal | DecimalJsLike | number | string
    totalOverdue: Decimal | DecimalJsLike | number | string
    status?: $Enums.EntityStatus
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutBusinessEntitiesInput
  }

  export type BusinessEntityUncheckedCreateWithoutDocumentsInput = {
    id?: number
    type: $Enums.EntityType
    ownerId: number
    name: string
    trn: string
    description?: string | null
    note?: string | null
    defaultMarkup?: Decimal | DecimalJsLike | number | string | null
    standardMarkup?: Decimal | DecimalJsLike | number | string | null
    website?: string | null
    street1?: string | null
    street2?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    zip?: string | null
    contactTitle?: string | null
    contactFirstName?: string | null
    contactMiddleName?: string | null
    contactLastName?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    creditLimit: Decimal | DecimalJsLike | number | string
    openBalance: Decimal | DecimalJsLike | number | string
    totalOverdue: Decimal | DecimalJsLike | number | string
    status?: $Enums.EntityStatus
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessEntityCreateOrConnectWithoutDocumentsInput = {
    where: BusinessEntityWhereUniqueInput
    create: XOR<BusinessEntityCreateWithoutDocumentsInput, BusinessEntityUncheckedCreateWithoutDocumentsInput>
  }

  export type DocumentProductCreateWithoutDocumentInput = {
    name: string
    sku: string
    barcode: string
    description?: string | null
    sellingPrice: Decimal | DecimalJsLike | number | string
    unitOfMeasurement: $Enums.Measurements
    quantity: Decimal | DecimalJsLike | number | string
    product: ProductCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentProductUncheckedCreateWithoutDocumentInput = {
    id?: number
    productId: number
    name: string
    sku: string
    barcode: string
    description?: string | null
    sellingPrice: Decimal | DecimalJsLike | number | string
    unitOfMeasurement: $Enums.Measurements
    quantity: Decimal | DecimalJsLike | number | string
  }

  export type DocumentProductCreateOrConnectWithoutDocumentInput = {
    where: DocumentProductWhereUniqueInput
    create: XOR<DocumentProductCreateWithoutDocumentInput, DocumentProductUncheckedCreateWithoutDocumentInput>
  }

  export type DocumentProductCreateManyDocumentInputEnvelope = {
    data: DocumentProductCreateManyDocumentInput | DocumentProductCreateManyDocumentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDocumentsInput = {
    update: XOR<UserUpdateWithoutDocumentsInput, UserUncheckedUpdateWithoutDocumentsInput>
    create: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDocumentsInput, UserUncheckedUpdateWithoutDocumentsInput>
  }

  export type UserUpdateWithoutDocumentsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneWithoutUsersNestedInput
    products?: ProductUpdateManyWithoutOwnerNestedInput
    businessEntities?: BusinessEntityUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutDocumentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    orgId?: NullableIntFieldUpdateOperationsInput | number | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutOwnerNestedInput
    businessEntities?: BusinessEntityUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type BusinessEntityUpsertWithoutDocumentsInput = {
    update: XOR<BusinessEntityUpdateWithoutDocumentsInput, BusinessEntityUncheckedUpdateWithoutDocumentsInput>
    create: XOR<BusinessEntityCreateWithoutDocumentsInput, BusinessEntityUncheckedCreateWithoutDocumentsInput>
    where?: BusinessEntityWhereInput
  }

  export type BusinessEntityUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: BusinessEntityWhereInput
    data: XOR<BusinessEntityUpdateWithoutDocumentsInput, BusinessEntityUncheckedUpdateWithoutDocumentsInput>
  }

  export type BusinessEntityUpdateWithoutDocumentsInput = {
    type?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    name?: StringFieldUpdateOperationsInput | string
    trn?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    defaultMarkup?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    standardMarkup?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    street1?: NullableStringFieldUpdateOperationsInput | string | null
    street2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    contactTitle?: NullableStringFieldUpdateOperationsInput | string | null
    contactFirstName?: NullableStringFieldUpdateOperationsInput | string | null
    contactMiddleName?: NullableStringFieldUpdateOperationsInput | string | null
    contactLastName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    creditLimit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    openBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalOverdue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumEntityStatusFieldUpdateOperationsInput | $Enums.EntityStatus
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutBusinessEntitiesNestedInput
  }

  export type BusinessEntityUncheckedUpdateWithoutDocumentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    ownerId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    trn?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    defaultMarkup?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    standardMarkup?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    street1?: NullableStringFieldUpdateOperationsInput | string | null
    street2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    contactTitle?: NullableStringFieldUpdateOperationsInput | string | null
    contactFirstName?: NullableStringFieldUpdateOperationsInput | string | null
    contactMiddleName?: NullableStringFieldUpdateOperationsInput | string | null
    contactLastName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    creditLimit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    openBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalOverdue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumEntityStatusFieldUpdateOperationsInput | $Enums.EntityStatus
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentProductUpsertWithWhereUniqueWithoutDocumentInput = {
    where: DocumentProductWhereUniqueInput
    update: XOR<DocumentProductUpdateWithoutDocumentInput, DocumentProductUncheckedUpdateWithoutDocumentInput>
    create: XOR<DocumentProductCreateWithoutDocumentInput, DocumentProductUncheckedCreateWithoutDocumentInput>
  }

  export type DocumentProductUpdateWithWhereUniqueWithoutDocumentInput = {
    where: DocumentProductWhereUniqueInput
    data: XOR<DocumentProductUpdateWithoutDocumentInput, DocumentProductUncheckedUpdateWithoutDocumentInput>
  }

  export type DocumentProductUpdateManyWithWhereWithoutDocumentInput = {
    where: DocumentProductScalarWhereInput
    data: XOR<DocumentProductUpdateManyMutationInput, DocumentProductUncheckedUpdateManyWithoutDocumentInput>
  }

  export type DocumentCreateWithoutProductsInput = {
    documentCode: string
    documentType: $Enums.DocumentTypes
    documentStatus: $Enums.DocumentStatus
    paymentStatus: $Enums.PaymentStatus
    date?: Date | string
    dueDate: Date | string
    vatAmount: Decimal | DecimalJsLike | number | string
    vatRate: Decimal | DecimalJsLike | number | string
    amountBeforeVat: Decimal | DecimalJsLike | number | string
    amountAfterVat: Decimal | DecimalJsLike | number | string
    taxWithheldAmount?: Decimal | DecimalJsLike | number | string | null
    withHoldingTaxRate?: Decimal | DecimalJsLike | number | string | null
    withHoldingTaxAmount?: Decimal | DecimalJsLike | number | string | null
    note?: string | null
    memorandum?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutDocumentsInput
    businessEntity: BusinessEntityCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateWithoutProductsInput = {
    id?: number
    ownerId: number
    businessEntityId: number
    documentCode: string
    documentType: $Enums.DocumentTypes
    documentStatus: $Enums.DocumentStatus
    paymentStatus: $Enums.PaymentStatus
    date?: Date | string
    dueDate: Date | string
    vatAmount: Decimal | DecimalJsLike | number | string
    vatRate: Decimal | DecimalJsLike | number | string
    amountBeforeVat: Decimal | DecimalJsLike | number | string
    amountAfterVat: Decimal | DecimalJsLike | number | string
    taxWithheldAmount?: Decimal | DecimalJsLike | number | string | null
    withHoldingTaxRate?: Decimal | DecimalJsLike | number | string | null
    withHoldingTaxAmount?: Decimal | DecimalJsLike | number | string | null
    note?: string | null
    memorandum?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentCreateOrConnectWithoutProductsInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutProductsInput, DocumentUncheckedCreateWithoutProductsInput>
  }

  export type ProductCreateWithoutDocumentsInput = {
    name: string
    sku: string
    barcode: string
    description?: string | null
    costPrice: Decimal | DecimalJsLike | number | string
    unitOfMeasurement: $Enums.Measurements
    quantity: Decimal | DecimalJsLike | number | string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutDocumentsInput = {
    id?: number
    ownerId: number
    name: string
    sku: string
    barcode: string
    description?: string | null
    costPrice: Decimal | DecimalJsLike | number | string
    unitOfMeasurement: $Enums.Measurements
    quantity: Decimal | DecimalJsLike | number | string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateOrConnectWithoutDocumentsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutDocumentsInput, ProductUncheckedCreateWithoutDocumentsInput>
  }

  export type DocumentUpsertWithoutProductsInput = {
    update: XOR<DocumentUpdateWithoutProductsInput, DocumentUncheckedUpdateWithoutProductsInput>
    create: XOR<DocumentCreateWithoutProductsInput, DocumentUncheckedCreateWithoutProductsInput>
    where?: DocumentWhereInput
  }

  export type DocumentUpdateToOneWithWhereWithoutProductsInput = {
    where?: DocumentWhereInput
    data: XOR<DocumentUpdateWithoutProductsInput, DocumentUncheckedUpdateWithoutProductsInput>
  }

  export type DocumentUpdateWithoutProductsInput = {
    documentCode?: StringFieldUpdateOperationsInput | string
    documentType?: EnumDocumentTypesFieldUpdateOperationsInput | $Enums.DocumentTypes
    documentStatus?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    vatAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    vatRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountBeforeVat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountAfterVat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxWithheldAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    withHoldingTaxRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    withHoldingTaxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    memorandum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutDocumentsNestedInput
    businessEntity?: BusinessEntityUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    businessEntityId?: IntFieldUpdateOperationsInput | number
    documentCode?: StringFieldUpdateOperationsInput | string
    documentType?: EnumDocumentTypesFieldUpdateOperationsInput | $Enums.DocumentTypes
    documentStatus?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    vatAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    vatRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountBeforeVat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountAfterVat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxWithheldAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    withHoldingTaxRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    withHoldingTaxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    memorandum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpsertWithoutDocumentsInput = {
    update: XOR<ProductUpdateWithoutDocumentsInput, ProductUncheckedUpdateWithoutDocumentsInput>
    create: XOR<ProductCreateWithoutDocumentsInput, ProductUncheckedCreateWithoutDocumentsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutDocumentsInput, ProductUncheckedUpdateWithoutDocumentsInput>
  }

  export type ProductUpdateWithoutDocumentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    costPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitOfMeasurement?: EnumMeasurementsFieldUpdateOperationsInput | $Enums.Measurements
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutDocumentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    costPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitOfMeasurement?: EnumMeasurementsFieldUpdateOperationsInput | $Enums.Measurements
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyOrganizationInput = {
    id?: number
    username: string
    password: string
    firstname: string
    middlename?: string | null
    lastname: string
    email: string
    phone?: string | null
    image?: string | null
    role: $Enums.Roles
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutOrganizationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutOwnerNestedInput
    documents?: DocumentUpdateManyWithoutOwnerNestedInput
    businessEntities?: BusinessEntityUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutOwnerNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutOwnerNestedInput
    businessEntities?: BusinessEntityUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateManyWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyOwnerInput = {
    id?: number
    name: string
    sku: string
    barcode: string
    description?: string | null
    costPrice: Decimal | DecimalJsLike | number | string
    unitOfMeasurement: $Enums.Measurements
    quantity: Decimal | DecimalJsLike | number | string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentCreateManyOwnerInput = {
    id?: number
    businessEntityId: number
    documentCode: string
    documentType: $Enums.DocumentTypes
    documentStatus: $Enums.DocumentStatus
    paymentStatus: $Enums.PaymentStatus
    date?: Date | string
    dueDate: Date | string
    vatAmount: Decimal | DecimalJsLike | number | string
    vatRate: Decimal | DecimalJsLike | number | string
    amountBeforeVat: Decimal | DecimalJsLike | number | string
    amountAfterVat: Decimal | DecimalJsLike | number | string
    taxWithheldAmount?: Decimal | DecimalJsLike | number | string | null
    withHoldingTaxRate?: Decimal | DecimalJsLike | number | string | null
    withHoldingTaxAmount?: Decimal | DecimalJsLike | number | string | null
    note?: string | null
    memorandum?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessEntityCreateManyOwnerInput = {
    id?: number
    type: $Enums.EntityType
    name: string
    trn: string
    description?: string | null
    note?: string | null
    defaultMarkup?: Decimal | DecimalJsLike | number | string | null
    standardMarkup?: Decimal | DecimalJsLike | number | string | null
    website?: string | null
    street1?: string | null
    street2?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    zip?: string | null
    contactTitle?: string | null
    contactFirstName?: string | null
    contactMiddleName?: string | null
    contactLastName?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    creditLimit: Decimal | DecimalJsLike | number | string
    openBalance: Decimal | DecimalJsLike | number | string
    totalOverdue: Decimal | DecimalJsLike | number | string
    status?: $Enums.EntityStatus
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    costPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitOfMeasurement?: EnumMeasurementsFieldUpdateOperationsInput | $Enums.Measurements
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    costPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitOfMeasurement?: EnumMeasurementsFieldUpdateOperationsInput | $Enums.Measurements
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    costPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitOfMeasurement?: EnumMeasurementsFieldUpdateOperationsInput | $Enums.Measurements
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUpdateWithoutOwnerInput = {
    documentCode?: StringFieldUpdateOperationsInput | string
    documentType?: EnumDocumentTypesFieldUpdateOperationsInput | $Enums.DocumentTypes
    documentStatus?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    vatAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    vatRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountBeforeVat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountAfterVat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxWithheldAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    withHoldingTaxRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    withHoldingTaxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    memorandum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessEntity?: BusinessEntityUpdateOneRequiredWithoutDocumentsNestedInput
    products?: DocumentProductUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    businessEntityId?: IntFieldUpdateOperationsInput | number
    documentCode?: StringFieldUpdateOperationsInput | string
    documentType?: EnumDocumentTypesFieldUpdateOperationsInput | $Enums.DocumentTypes
    documentStatus?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    vatAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    vatRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountBeforeVat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountAfterVat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxWithheldAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    withHoldingTaxRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    withHoldingTaxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    memorandum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: DocumentProductUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    businessEntityId?: IntFieldUpdateOperationsInput | number
    documentCode?: StringFieldUpdateOperationsInput | string
    documentType?: EnumDocumentTypesFieldUpdateOperationsInput | $Enums.DocumentTypes
    documentStatus?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    vatAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    vatRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountBeforeVat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountAfterVat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxWithheldAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    withHoldingTaxRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    withHoldingTaxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    memorandum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessEntityUpdateWithoutOwnerInput = {
    type?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    name?: StringFieldUpdateOperationsInput | string
    trn?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    defaultMarkup?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    standardMarkup?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    street1?: NullableStringFieldUpdateOperationsInput | string | null
    street2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    contactTitle?: NullableStringFieldUpdateOperationsInput | string | null
    contactFirstName?: NullableStringFieldUpdateOperationsInput | string | null
    contactMiddleName?: NullableStringFieldUpdateOperationsInput | string | null
    contactLastName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    creditLimit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    openBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalOverdue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumEntityStatusFieldUpdateOperationsInput | $Enums.EntityStatus
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUpdateManyWithoutBusinessEntityNestedInput
  }

  export type BusinessEntityUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    name?: StringFieldUpdateOperationsInput | string
    trn?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    defaultMarkup?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    standardMarkup?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    street1?: NullableStringFieldUpdateOperationsInput | string | null
    street2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    contactTitle?: NullableStringFieldUpdateOperationsInput | string | null
    contactFirstName?: NullableStringFieldUpdateOperationsInput | string | null
    contactMiddleName?: NullableStringFieldUpdateOperationsInput | string | null
    contactLastName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    creditLimit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    openBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalOverdue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumEntityStatusFieldUpdateOperationsInput | $Enums.EntityStatus
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutBusinessEntityNestedInput
  }

  export type BusinessEntityUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    name?: StringFieldUpdateOperationsInput | string
    trn?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    defaultMarkup?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    standardMarkup?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    street1?: NullableStringFieldUpdateOperationsInput | string | null
    street2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    contactTitle?: NullableStringFieldUpdateOperationsInput | string | null
    contactFirstName?: NullableStringFieldUpdateOperationsInput | string | null
    contactMiddleName?: NullableStringFieldUpdateOperationsInput | string | null
    contactLastName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    creditLimit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    openBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalOverdue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumEntityStatusFieldUpdateOperationsInput | $Enums.EntityStatus
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateManyBusinessEntityInput = {
    id?: number
    ownerId: number
    documentCode: string
    documentType: $Enums.DocumentTypes
    documentStatus: $Enums.DocumentStatus
    paymentStatus: $Enums.PaymentStatus
    date?: Date | string
    dueDate: Date | string
    vatAmount: Decimal | DecimalJsLike | number | string
    vatRate: Decimal | DecimalJsLike | number | string
    amountBeforeVat: Decimal | DecimalJsLike | number | string
    amountAfterVat: Decimal | DecimalJsLike | number | string
    taxWithheldAmount?: Decimal | DecimalJsLike | number | string | null
    withHoldingTaxRate?: Decimal | DecimalJsLike | number | string | null
    withHoldingTaxAmount?: Decimal | DecimalJsLike | number | string | null
    note?: string | null
    memorandum?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUpdateWithoutBusinessEntityInput = {
    documentCode?: StringFieldUpdateOperationsInput | string
    documentType?: EnumDocumentTypesFieldUpdateOperationsInput | $Enums.DocumentTypes
    documentStatus?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    vatAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    vatRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountBeforeVat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountAfterVat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxWithheldAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    withHoldingTaxRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    withHoldingTaxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    memorandum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutDocumentsNestedInput
    products?: DocumentProductUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateWithoutBusinessEntityInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    documentCode?: StringFieldUpdateOperationsInput | string
    documentType?: EnumDocumentTypesFieldUpdateOperationsInput | $Enums.DocumentTypes
    documentStatus?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    vatAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    vatRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountBeforeVat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountAfterVat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxWithheldAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    withHoldingTaxRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    withHoldingTaxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    memorandum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: DocumentProductUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateManyWithoutBusinessEntityInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    documentCode?: StringFieldUpdateOperationsInput | string
    documentType?: EnumDocumentTypesFieldUpdateOperationsInput | $Enums.DocumentTypes
    documentStatus?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    vatAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    vatRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountBeforeVat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountAfterVat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxWithheldAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    withHoldingTaxRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    withHoldingTaxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    memorandum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentProductCreateManyProductInput = {
    id?: number
    documentId: number
    name: string
    sku: string
    barcode: string
    description?: string | null
    sellingPrice: Decimal | DecimalJsLike | number | string
    unitOfMeasurement: $Enums.Measurements
    quantity: Decimal | DecimalJsLike | number | string
  }

  export type DocumentProductUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sellingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitOfMeasurement?: EnumMeasurementsFieldUpdateOperationsInput | $Enums.Measurements
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    document?: DocumentUpdateOneRequiredWithoutProductsNestedInput
  }

  export type DocumentProductUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sellingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitOfMeasurement?: EnumMeasurementsFieldUpdateOperationsInput | $Enums.Measurements
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DocumentProductUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sellingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitOfMeasurement?: EnumMeasurementsFieldUpdateOperationsInput | $Enums.Measurements
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DocumentProductCreateManyDocumentInput = {
    id?: number
    productId: number
    name: string
    sku: string
    barcode: string
    description?: string | null
    sellingPrice: Decimal | DecimalJsLike | number | string
    unitOfMeasurement: $Enums.Measurements
    quantity: Decimal | DecimalJsLike | number | string
  }

  export type DocumentProductUpdateWithoutDocumentInput = {
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sellingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitOfMeasurement?: EnumMeasurementsFieldUpdateOperationsInput | $Enums.Measurements
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    product?: ProductUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DocumentProductUncheckedUpdateWithoutDocumentInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sellingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitOfMeasurement?: EnumMeasurementsFieldUpdateOperationsInput | $Enums.Measurements
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DocumentProductUncheckedUpdateManyWithoutDocumentInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sellingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitOfMeasurement?: EnumMeasurementsFieldUpdateOperationsInput | $Enums.Measurements
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}