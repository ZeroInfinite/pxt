/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.6.1(8f43cf5d0d3d233c9ba1c9085f2bb529f834c841)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/

define("vs/base/common/worker/workerServer.nls.ko", {
	"vs/base/common/errors": [
		"{0}. 오류 코드: {1}",
		"사용 권한이 거부되었습니다(HTTP {0}).",
		"사용 권한이 거부되었습니다.",
		"{0}(HTTP {1}: {2})",
		"{0}(HTTP {1})",
		"알 수 없는 연결 오류({0})",
		"알 수 없는 연결 오류가 발생했습니다. 인터넷에 연결되지 않았거나 연결된 서버가 오프라인 상태입니다.",
		"{0}: {1}",
		"알 수 없는 오류가 발생했습니다. 자세한 내용은 로그를 참조하세요.",
		"시스템 오류가 발생했습니다({0}).",
		"알 수 없는 오류가 발생했습니다. 자세한 내용은 로그를 참조하세요.",
		"{0}(총 {1}개의 오류)",
		"알 수 없는 오류가 발생했습니다. 자세한 내용은 로그를 참조하세요.",
		"구현 안 됨",
		"잘못된 인수: {0}",
		"잘못된 인수",
		"잘못된 상태: {0}",
		"잘못된 상태",
		"필요한 파일을 로드하지 못했습니다. 인터넷에 연결되지 않았거나 연결된 서버가 오프라인 상태입니다. 브라우저를 새로 고친 후 다시 시도해 보세요.",
		"필요한 파일을 로드하지 못했습니다. 응용 프로그램을 다시 시작하여 다시 시도하세요. 세부 정보: {0}",
	],
	"vs/base/common/severity": [
		"오류",
		"경고",
		"정보",
	],
	"vs/editor/common/config/defaultConfig": [
		"편집기 콘텐츠",
	],
	"vs/editor/common/model/textModelWithTokens": [
		"입력을 토큰화하는 동안 모드에서 오류가 발생했습니다.",
	],
	"vs/editor/common/modes/modesRegistry": [
		"일반 텍스트",
	],
	"vs/editor/common/services/modeServiceImpl": [
		"언어 선언을 적용합니다.",
		"언어의 ID입니다.",
		"언어에 대한 이름 별칭입니다.",
		"파일 확장이 언어에 연결되어 있습니다.",
		"파일 이름이 언어에 연결되어 있습니다.",
		"파일 이름 GLOB 패턴이 언어에 연결되어 있습니다.",
		"Mime 형식이 언어에 연결되어 있습니다.",
		"언어 파일의 첫 번째 줄과 일치하는 정규식입니다.",
		"언어에 대한 구성 옵션을 포함하는 파일에 대한 상대 경로입니다.",
		"`contributes.{0}`에 대한 빈 값",
		"속성 `{0}`은(는) 필수이며 `string` 형식이어야 합니다.",
		"`{0}` 속성은 생략 가능하며 `string[]` 형식이어야 합니다.",
		"`{0}` 속성은 생략 가능하며 `string[]` 형식이어야 합니다.",
		"`{0}` 속성은 생략 가능하며 `string` 형식이어야 합니다.",
		"`{0}` 속성은 생략 가능하며 `string` 형식이어야 합니다.",
		"`{0}` 속성은 생략 가능하며 `string[]` 형식이어야 합니다.",
		"`{0}` 속성은 생략 가능하며 `string[]` 형식이어야 합니다.",
		"잘못된 `contributes.{0}`입니다. 배열이 필요합니다.",
	],
	"vs/platform/extensions/common/abstractExtensionService": [
		"확장 `{1}`을(를) 활성화하지 못했습니다. 이유: 알 수 없는 종속성 `{0}`.",
		"확장 `{1}`을(를) 활성화하지 못했습니다. 이유: 종속성 `{0}`이(가) 활성화되지 않았습니다.",
		"확장 `{0}`을(를) 활성화하지 못했습니다. 이유: 종속성 수준이 10개가 넘음(종속성 루프일 가능성이 높음).",
		"확장 `{0}` 활성화 실패: {1}.",
	],
	"vs/platform/extensions/common/extensionsRegistry": [
		"가져온 확장 설명이 비어 있습니다.",
		"속성 `{0}`은(는) 필수이며 `string` 형식이어야 합니다.",
		"속성 `{0}`은(는) 필수이며 `string` 형식이어야 합니다.",
		"속성 `{0}`은(는) 필수이며 `string` 형식이어야 합니다.",
		"속성 `{0}`은(는) 필수이며 `object` 형식이어야 합니다.",
		"속성 `{0}`은(는) 필수이며 `string` 형식이어야 합니다.",
		"속성 `{0}`은(는) 생략할 수 있으며 `string[]` 형식이어야 합니다.",
		"속성 `{0}`은(는) 생략할 수 있으며 `string[]` 형식이어야 합니다.",
		"속성 `{0}` 및 `{1}`은(는) 둘 다 지정하거나 둘 다 생략해야 합니다.",
		"속성 `{0}`은(는) 생략할 수 있으며 `string` 형식이어야 합니다.",
		"확장의 폴더({1}) 내에 포함할 `main`({0})이 필요합니다. 이로 인해 확장이 이식 불가능한 상태가 될 수 있습니다.",
		"속성 `{0}` 및 `{1}`은(는) 둘 다 지정하거나 둘 다 생략해야 합니다.",
		"VS Code 갤러리에 사용되는 확장의 표시 이름입니다.",
		"확장을 분류하기 위해 VS Code 갤러리에서 사용하는 범주입니다.",
		"VS Code 마켓플레이스에 사용되는 배너입니다.",
		"VS Code 마켓플레이스 페이지 머리글의 배너 색상입니다.",
		"배너에 사용되는 글꼴의 색상 테마입니다.",
		"VS Code 확장의 게시자입니다.",
		"VS Code 확장에 대한 활성화 이벤트입니다.",
		"다른 확장에 대한 종속성입니다. 확장 식별자는 항상 ${publisher}.${name}입니다(예: vscode.csharp).",
		"패키지가 VS Code 확장 형태로 게시되기 전에 스크립트가 실행되었습니다.",
		"이 패키지에 표시된 VS Code 확장의 전체 기여입니다.",
	]
});