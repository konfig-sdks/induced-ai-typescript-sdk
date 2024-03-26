<div align="center">

[![Visit Inducedai](./header.png)](https://induced.ai)

# [Inducedai](https://induced.ai)<a id="inducedai"></a>

Building the next evolution of actionable AI.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`inducedai.autonomous.getResult`](#inducedaiautonomousgetresult)
  * [`inducedai.autonomous.terminateTask`](#inducedaiautonomousterminatetask)
  * [`inducedai.extraction.fromUrl`](#inducedaiextractionfromurl)
  * [`inducedai.extraction.getResult`](#inducedaiextractiongetresult)
  * [`inducedai.feedback.submission`](#inducedaifeedbacksubmission)
  * [`inducedai.task.execute`](#inducedaitaskexecute)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=InducedAI&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { InducedAi } from "induced-ai-typescript-sdk";

const inducedai = new InducedAi({
  // Defining the base path is optional and defaults to https://api.induced.ai/api/v1
  // basePath: "https://api.induced.ai/api/v1",
  apiKey: "API_KEY",
});

const getResultResponse = await inducedai.autonomous.getResult({
  id: "id_example",
});

console.log(getResultResponse);
```

## Reference<a id="reference"></a>


### `inducedai.autonomous.getResult`<a id="inducedaiautonomousgetresult"></a>

Get Autonomous Task Result

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getResultResponse = await inducedai.autonomous.getResult({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AutonomousGetResultResponse](./models/autonomous-get-result-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/autonomous/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `inducedai.autonomous.terminateTask`<a id="inducedaiautonomousterminatetask"></a>

Stop an Autonomous Task

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const terminateTaskResponse = await inducedai.autonomous.terminateTask({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/autonomous/{id}/stop` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `inducedai.extraction.fromUrl`<a id="inducedaiextractionfromurl"></a>

Extract data from a URL

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const fromUrlResponse = await inducedai.extraction.fromUrl({
  format: "json",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### url: `string`<a id="url-string"></a>

##### query: `string`<a id="query-string"></a>

##### columns: `string`<a id="columns-string"></a>

##### limit: `number`<a id="limit-number"></a>

##### format: `string`<a id="format-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ExtractionFromUrlResponse](./models/extraction-from-url-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/extract` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `inducedai.extraction.getResult`<a id="inducedaiextractiongetresult"></a>

Get extraction result

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getResultResponse = await inducedai.extraction.getResult({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ExtractionGetResultResponse](./models/extraction-get-result-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/extract/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `inducedai.feedback.submission`<a id="inducedaifeedbacksubmission"></a>

Provide Feedback for an Autonomous Task

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const submissionResponse = await inducedai.feedback.submission({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

##### feedback: `boolean`<a id="feedback-boolean"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/autonomous/{id}/feedback` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `inducedai.task.execute`<a id="inducedaitaskexecute"></a>

Execute an Autonomous Task

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const executeResponse = await inducedai.task.execute({
  task: "Go to google and search for Elon Musk",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### task: `string`<a id="task-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[TaskExecuteResponse](./models/task-execute-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/autonomous` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
